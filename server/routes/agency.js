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
    await logActivity(
        userId,
        "Creation Agency",
        `Created  Agency with id ${userId}`
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
        "Update Agency",
        `Updated  Agency with id ${userId}`
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
          role: "Ügynök",
          propertyCount: propertyCount, // Number of properties submitted by the member
          credit: member.user.credit || 0, // Member's credit
        };
      })
    );

    // Construct the combined members list with the admin included
    const combinedMembers = [
      {
        id: agency.adminID,
        name: `${agency.admin.lastName} ${agency.admin.firstName}`,
        email: agency.admin.email,
        role: "Admin",
        propertyCount: 0,
        credit: agency.admin.credit || 0,
      },
      ...memberDetails,
    ];

    res.status(200).json({ members: combinedMembers });
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
      host: "mail.otthonzona.com",
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@otthonzona.com",
        pass: "n8yewXbyP$SRcc",
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
        "User invation to Agency",
        `Invated  User with id ${userToInvite.id} to Agency with id ${agencyId}`
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
      role: "Member",
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
        "Removed member from Agency",
        `Removed  User with id ${memberId} from Agency with id ${agencyId}`
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
        "Sended credit to member",
        `Removed  User with id ${memberId} from Agency with id ${agencyId} ammount: ${creditAmount}`
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
