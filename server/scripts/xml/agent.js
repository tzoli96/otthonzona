const bcrypt = require("bcryptjs");
const prisma = require("../../prisma/prisma");
const logFile = require("../utils/logFile");
const { getProperties, getValidId } = require("./property");
const BATCH_SIZE = 20;

function generateAlphanumericPassword() {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

exports.handleAgent = async (agents) => {
  const length = agents.length;
  for (let i = 0; i < length; i += BATCH_SIZE) {
    logFile(
      "agent-log.txt",
      `Processing batch starting from agent index: ${i}`
    );
    const agentsBatch = agents.splice(0, BATCH_SIZE);
    const agentsToFill = await Promise.all(
      agentsBatch.map(async (agent) => {
        const password = generateAlphanumericPassword();
        const pwHash = await bcrypt.hash(password, 10);
        return {
          email: agent.agent_email[0],
          lastName: agent.agent_name[0].split(" ")[0],
          firstName: agent.agent_name[0].split(" ")[1],
          phone: agent.agent_phone[0],
          pwHash,
          password,
          xml: agent.xml[0],
        };
      })
    );

    // Find existing users and new agents
    const existingUsers = await prisma.user.findMany({
      where: { email: { in: agentsToFill.map((a) => a.email) } },
      select: { email: true, id: true },
    });

    await Promise.all(
      existingUsers.map(async (user) => {
        const agentData = agentsToFill.find((a) => a.email === user.email);
        if (agentData) {
          await prisma.user.update({
            where: { email: user.email },
            data: { phone: agentData.phone },
          });
          logFile(
            "update-log.txt",
            `Updated phone number for user: ${user.email}`
          );
        }
      })
    );

    const emailToUserIdMap = existingUsers.reduce((acc, user) => {
      acc[user.email] = user.id;
      return acc;
    }, {});

    const newAgents = agentsToFill.filter(
      (a) => !existingUsers.some((eu) => eu.email === a.email)
    );

    // Create new agents in the database
    if (newAgents.length > 0) {
      await prisma.user.createMany({
        data: newAgents.map(({ password, xml, ...others }) => others),
      });

      newAgents.forEach((agent) => {
        logFile("creds", `${agent.email}:${agent.password}`);
      });
      logFile("agent-log.txt", `Created ${newAgents.length} new agents.`);
    }

    logFile(
      "agent-log.txt",
      `Processing properties for ${agentsToFill.length} agents.`
    );
    // Retrieve all users (existing and new) related to the current batch of agents
    const allAgents = await prisma.user.findMany({
      where: { email: { in: agentsToFill.map((a) => a.email) } },
    });

    // Process properties for all agents and get reference links
    for (const agent of agentsToFill) {
      const { properties: agentProperties, propertyReferenceLinks } =
        await getProperties(agent, allAgents);

      // Fetch existing property reference links from the database for this agent
      const existingUser = allAgents.find((u) => u.email === agent.email);
      const existingPropertyLinks = (
        await prisma.property.findMany({
          where: { submittedBy: existingUser.id },
          select: { referenceLink: true },
        })
      ).map((p) => p.referenceLink);

      // Determine which properties are missing in the XML
      const propertiesToDelete = existingPropertyLinks.filter(
        (link) => !propertyReferenceLinks.includes(link)
      );

      // Delete these properties from the database
      await Promise.all(
        propertiesToDelete.map((link) =>
          prisma.property.deleteMany({ where: { referenceLink: link } })
        )
      );
    }

    // Process new or updated properties for all agents
    const newOrUpdatedProperties = (
      await Promise.all(
        agentsToFill.map(async (agent) => {
          return getProperties(agent, allAgents); // Pass allAgents here
        })
      )
    ).flat();

    const properties = newOrUpdatedProperties.filter(
      (p) => p && p.referenceLink
    );

    const previousProperties = await prisma.property.findMany({
      where: { referenceLink: { in: properties.map((p) => p.referenceLink) } },
    });

    const linkMap = {};
    previousProperties.forEach((p) => {
      linkMap[p.referenceLink] = p.id;
    });

    const processedProperties = await Promise.all(
      properties.map(async (p) => {
        try {
          if (linkMap[p.referenceLink]) {
            const { id, ...data } = p;
            return await prisma.property.update({
              where: { id: linkMap[p.referenceLink] },
              data,
            });
          } else {
            const id = await getValidId();
            return await prisma.property.create({
              data: {
                id,
                ...p,
                submittedBy: p.submittedBy,
              },
            });
          }
        } catch (error) {
          logFile(
            "error-log.txt",
            `Failed to process property with referenceLink ${p.referenceLink}: ${error.message}`
          );
          return null; // Return null to indicate failure
        }
      })
    );

    const failedCount = processedProperties.filter((p) => p === null).length;
    if (failedCount > 0) {
      logFile("error-log.txt", `${failedCount} properties failed to process.`);
    }
  }
};
