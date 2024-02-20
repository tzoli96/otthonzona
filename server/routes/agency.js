const express = require("express");
const prisma = require("../prisma/prisma");
const auth = require("../middleware/auth");
const crypto = require("crypto");

const router = express.Router();

const fs = require("fs");
const nodemailer = require("nodemailer");
const wrapEmail = require("../utils/wrapEmail");
const wrapEmailInvite = require("../utils/wrapEmailInvite");
const { getToken, createUser } = require("../utils/auth");
const { logActivity } = require("../models/ActivityLog");

// POST route to create a new agency
router.post("/", auth, async (req, res) => {
  try {
    const {
      officeName,
      officeAddress,
      officeEmail,
      officePhone,
      officeCompany,
      network,
    } = req.body;

    const userId = req.user.id;

    const newAgency = await prisma.agency.create({
      data: {
        officeName,
        officeAddress,
        officeEmail,
        officePhone,
        officeCompany,
        network,
        adminID: userId,
      },
    });

    //set isAgent to true
    await prisma.user.update({
      where: { id: userId },
      data: { isAgent: true },
    });

    // Add the user as a member of the agency with admin role
    await prisma.member.create({
      data: {
        userId: userId,
        agencyId: newAgency.id,
        role: "Admin",
      },
    });

    await logActivity(
      userId,
      "Iroda Létrehozva",
      `${userId} felhasználó új irodát hozott létre`
    );
    return res.status(201).json({ data: newAgency });
  } catch (error) {
    console.error("Error creating agency:", error);
    return res.status(500).json({ message: "Error creating agency" });
  }
});

// GET route to fetch the agency data for the logged-in user
router.get("/myAgency", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    // First, try to find an agency where the user is an admin
    let agency = await prisma.agency.findFirst({
      where: { adminID: userId },
      include: { admin: true, members: { include: { user: true } } },
    });

    // If not found as an admin, check if the user is a member of any agency
    if (!agency) {
      const member = await prisma.member.findFirst({
        where: { userId },
        include: {
          agency: {
            include: { admin: true, members: { include: { user: true } } },
          },
        },
      });
      if (member && member.agency) {
        agency = member.agency;
      }
    }

    if (!agency) {
      return res.status(404).json({ message: "Agency not found" });
    }

    return res.status(200).json({ data: agency });
  } catch (error) {
    console.error("Error fetching agency data:", error);
    return res.status(500).json({ message: "Error fetching agency data" });
  }
});

// GET route to fetch the member data for the logged-in user
router.get("/member", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    let member = await prisma.member.findFirst({
      where: { userId },
      include: { agency: true, tags: true, attributes: true },
    });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    return res.status(200).json({ data: member });
  } catch (error) {
    console.error("Error fetching member data:", error);
    return res.status(500).json({ message: "Error member agency data" });
  }
});

// GET route to fetch the member data for frontend by member id
router.get("/member/:memberId", auth, async (req, res) => {
  try {
    const { memberId } = req.params;

    let member = await prisma.member.findFirst({
      where: { id: memberId },
      include: {
        agency: true,
        tags: true,
        user: true,
        attributes: {
          include: {
            attribute: true,
          },
        },
      },
    });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    return res.status(200).json({ data: member });
  } catch (error) {
    console.error("Error fetching member data:", error);
    return res.status(500).json({ message: "Error member data" });
  }
});

// GET route to fetch member attributes for the logged-in user
router.get("/attributes", auth, async (req, res) => {
  try {
    const attributes = await prisma.attribute.findMany({
      select: { members: false, id: true, label: true },
    });

    if (!attributes) {
      return res.status(404).json({ message: "Member attributes not found" });
    }

    return res.status(200).json({ data: attributes });
  } catch (error) {
    console.error("Error fetching member attributes data:", error);
    return res.status(500).json({ message: "Error member attributes data" });
  }
});

// GET route to fetch the member data for the logged-in user
router.get("/tags", auth, async (req, res) => {
  try {
    const areaTags = await prisma.memberTag.findMany({
      select: { members: false, id: true, name: true, type: true },
      where: { type: "area" },
    });

    const skillTags = await prisma.memberTag.findMany({
      select: { members: false, id: true, name: true, type: true },
      where: { type: "skill" },
    });

    if (!areaTags && !skillTags) {
      return res.status(404).json({ message: "Member tags not found" });
    }

    return res.status(200).json({
      data: {
        areaTags,
        skillTags,
      },
    });
  } catch (error) {
    console.error("Error fetching member data:", error);
    return res.status(500).json({ message: "Error member tag data" });
  }
});

router.get("/area-tags", auth, async (req, res) => {
  const { q } = req.query;

  try {
    const findManyOptions = {
      select: {
        members: false,
        id: true,
        name: true,
      },
      where: { type: "area" },
    };

    if (q) {
      findManyOptions.where = {
        ...findManyOptions.where,
        AND: [
          {
            name: {
              contains: q,
            },
          },
        ],
      };
    }

    let areaTags = await prisma.memberTag.findMany(findManyOptions);

    if (!areaTags) {
      return res.status(404).json({ message: "Member area tags not found" });
    }

    areaTags = areaTags.map((tag) => ({
      value: tag.id,
      label: tag.name,
    }));

    return res.status(200).json(areaTags);
  } catch (error) {
    console.error("Error fetching member data:", error);
    return res.status(500).json({ message: "Error member tag data" });
  }
});

router.get("/skill-tags", auth, async (req, res) => {
  try {
    let skillTags = await prisma.memberTag.findMany({
      select: {
        members: false,
        id: true,
        name: true,
      },
      where: { type: "skill" },
    });

    if (!skillTags) {
      return res.status(404).json({ message: "Member skill tags not found" });
    }

    return res.status(200).json(skillTags);
  } catch (error) {
    console.error("Error fetching member data:", error);
    return res.status(500).json({ message: "Error member tag data" });
  }
});

// PUT route to update an existing agency member
router.put("/:memberId", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { memberId } = req.params;

    const member = await prisma.member.findUnique({ where: { id: memberId } });

    if (!member || member.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const { attributes, introduction, tags } = req.body;

    const updatedMember = await prisma.$transaction(async (prisma) => {
      const deleteAttributes = await prisma.memberAttribute.deleteMany({
        where: {
          memberId: memberId,
        },
      });

      const updateMember = await prisma.member.update({
        where: {
          id: memberId,
        },
        data: {
          introduction,
          tags: {
            set: [],
            connect: tags.map((tagId) => ({ id: tagId })),
          },
          attributes: {
            create: attributes.map((attr) => ({
              value: attr.value,
              attribute: {
                connect: { id: attr.id },
              },
            })),
          },
        },
      });

      await Promise.all([updateMember, deleteAttributes]);

      return await prisma.member.findFirst({
        where: { userId },
        include: { agency: true, tags: true, attributes: true },
      });
    });

    return res.status(200).json({ data: updatedMember });
  } catch (error) {
    console.error("Error updating agency:", error);
    return res.status(500).json({ message: "Error updating member" });
  }
});

// PUT route to update an existing agency
router.put("/:agencyId", auth, async (req, res) => {
  try {
    const { agencyId } = req.params;
    const userId = req.user.id;

    const agency = await prisma.agency.findUnique({ where: { id: agencyId } });
    if (!agency || agency.adminID !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const {
      officeName,
      officeAddress,
      officeEmail,
      officePhone,
      officeCompany,
      network,
    } = req.body;

    const updatedAgency = await prisma.agency.update({
      where: {
        id: agencyId,
      },
      data: {
        officeName,
        officeAddress,
        officeEmail,
        officePhone,
        officeCompany,
        network,
      },
    });
    await logActivity(
      userId,
      "Iroda Szerkesztve",
      `${userId} felhasználó szerkesztette az irodát`
    );

    return res.status(200).json({ data: updatedAgency });
  } catch (error) {
    console.error("Error updating agency:", error);
    return res.status(500).json({ message: "Error updating agency" });
  }
});

router.get("/:agencyId/members", auth, async (req, res) => {
  const { agencyId } = req.params;

  try {
    // Fetch the agency including the admin details
    const agency = await prisma.agency.findUnique({
      where: { id: agencyId },
      include: { admin: true },
    });

    if (!agency) {
      return res.status(404).json({ message: "Agency not found" });
    }

    // Fetch the members associated with the agency
    const members = await prisma.member.findMany({
      where: { agencyId },
      include: { user: true },
    });

    // Fetch property count and credit for each member
    const memberDetails = await Promise.all(
      members.map(async (member) => {
        const propertyCount = await prisma.property.count({
          where: { submittedBy: member.userId },
        });

        return {
          id: member.id,
          name: `${member.user.lastName} ${member.user.firstName}`,
          email: member.user.email,
          role: member.role,
          propertyCount: propertyCount, // Number of properties submitted by the member
          credit: member.user.credit || 0, // Member's credit
        };
      })
    );

    res.status(200).json({ members: memberDetails });
  } catch (error) {
    console.error("Error fetching agency members and admin:", error);
    res
      .status(500)
      .json({ message: "Error fetching agency members and admin" });
  }
});

router.post("/:agencyId/invite", auth, async (req, res) => {
  const { agencyId } = req.params;
  const { email } = req.body;

  try {
    // Find user by email
    const userToInvite = await prisma.user.findUnique({ where: { email } });
    if (!userToInvite) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate an invitation token
    const invitationToken = crypto.randomBytes(20).toString("hex");

    // Create an invitation record in the database
    await prisma.invitation.create({
      data: {
        userId: userToInvite.id, // Associate invitation with user ID
        email,
        agencyId,
        status: "Pending",
        token: invitationToken,
      },
    });

    // Set up email transporter
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Invitation link (adjust URL as needed)
    const link = `http://otthonzona.com/confirm-invite/${invitationToken}`;

    // Send an email with the invitation link
    await transporter.sendMail({
      from: '"OtthonZona.com" <no-reply@otthonzona.com>',
      to: email,
      subject: "Csatlakozás ingatlanirodához",
      html: wrapEmailInvite({
        // Adjust this function to format the email
        title: "Csatlakozás ingatlanirodához",
        content: `${link}`,
      }),
    });

    await logActivity(
      userToInvite.id,
      "Irodához Meghívott Felhasználó",
      `${userToInvite.id} felhasználó meghívót kapott, hogy csatlakozzon az irodához, Iroda ID: ${agencyId}`
    );
    res.status(200).json({ message: "Invitation sent successfully" });
  } catch (error) {
    console.error("Error sending invitation:", error);
    res.status(500).json({ message: "Error sending invitation" });
  }
});

router.get("/confirm-invite/:token", async (req, res) => {
  const { token } = req.params;

  // Find the invitation with the provided token
  const invitation = await prisma.invitation.findFirst({
    where: { token },
    include: { agency: true },
  });

  if (!invitation) {
    return res
      .status(400)
      .json({ error: "Invalid or expired invitation token" });
  }

  // Check if the user is already a member of the agency
  const existingMember = await prisma.member.findFirst({
    where: {
      userId: invitation.userId,
      agencyId: invitation.agencyId,
    },
  });

  if (existingMember) {
    return res
      .status(400)
      .json({ error: "User is already a member of this agency" });
  }

  // Add the user as a member of the agency
  await prisma.member.create({
    data: {
      userId: invitation.userId,
      agencyId: invitation.agencyId,
      role: "Ügynök", // Default role
    },
  });

  //set the isAgent to true
  await prisma.user.update({
    where: { id: invitation.userId },
    data: { isAgent: true },
  });

  // Update invitation status to accepted
  await prisma.invitation.update({
    where: { id: invitation.id },
    data: { status: "Accepted" },
  });

  await logActivity(
    invitation.userId,
    "Meghívó Elfogadva",
    `${invitation.userId} felhasználó elfogadta a meghívást az irodába, Iroda ID: ${invitation.agencyId}`
  );

  res.json({ success: "Joined the agency successfully" });
});

// DELETE route to remove a member from an agency
router.delete("/:agencyId/members/:memberId", auth, async (req, res) => {
  const { agencyId, memberId } = req.params;
  const userId = req.user.id; // ID of the user making the request

  try {
    // Check if the user is the admin of the agency
    const agency = await prisma.agency.findUnique({ where: { id: agencyId } });
    if (!agency || agency.adminID !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Delete the member
    await prisma.member.delete({
      where: {
        id: memberId,
      },
    });

    await logActivity(
      memberId,
      "Felhasználó Eltávolítva Az Irodából",
      `${memberId} felhasználó el lett távolítva az irodából, Iroda ID: ${agencyId}`
    );

    res.status(200).json({ message: "Member removed successfully" });
  } catch (error) {
    console.error("Error removing member:", error);
    res.status(500).json({ message: "Error removing member" });
  }
});

// POST route to send credits from admin to a member
router.post("/credit-sending", auth, async (req, res) => {
  const { agencyId, memberId, amount } = req.body;
  const userId = req.user.id; // ID of the user making the request

  console.log("Credit Sending Request:", {
    memberId,
    amount,
    userId,
  });

  try {
    // Validate the amount
    const creditAmount = parseInt(amount, 10);
    console.log("Validating amount...");
    if (amount <= 0) {
      console.log("Invalid amount:", amount);
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Check if the admin has enough credits
    console.log("Checking admin's credits...");
    const admin = await prisma.user.findUnique({ where: { id: userId } });
    console.log("Admin's current credits:", admin.credit);

    if (admin.credit < amount) {
      console.log(
        "Insufficient credits. Required:",
        amount,
        "Available:",
        admin.credit
      );
      return res.status(400).json({ message: "Insufficient credits" });
    }

    // Update the credits of the admin and the member
    console.log("Updating member's credits...");
    const member = await prisma.member.findUnique({
      where: { id: memberId },
      include: { user: true }, // Include the associated user
    });

    // Check if the member exists
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // Update the credits for the user associated with the member
    const updatedMember = await prisma.user.update({
      where: { id: member.user.id },
      data: { credit: { increment: creditAmount } },
    });

    console.log("Member's new credit:", member.credit);

    console.log("Decrementing admin's credits...");
    await prisma.user.update({
      where: { id: userId },
      data: { credit: { decrement: creditAmount } },
    });

    await logActivity(
      memberId,
      "Kreditátutalás",
      `${memberId} kreditátutalást kapott az irodától, Mennyiség: ${creditAmount}, Iroda ID: ${agencyId}`
    );
    console.log("Credits sent successfully");
    res
      .status(200)
      .json({ message: "Credits sent successfully", member: updatedMember });
  } catch (error) {
    console.error("Error sending credits:", error);
    res
      .status(500)
      .json({ message: "Error sending credits", errorDetails: error.message });
  }
});

module.exports = router;
