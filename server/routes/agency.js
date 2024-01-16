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

// POST route to create a new agency
router.post("/", auth, async (req, res) => {
  try {
    const { officeName, officeAddress, officeEmail, officePhone } = req.body;
    const userId = req.user.id; // Assuming the current user is the agency admin

    const newAgency = await prisma.agency.create({
      data: {
        officeName,
        officeAddress,
        officeEmail,
        officePhone,
        adminID: userId,
      },
    });

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
    const agency = await prisma.agency.findFirst({
      where: {
        adminID: userId,
      },
    });

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
    const { officeName, officeAddress, officeEmail, officePhone } = req.body;

    const updatedAgency = await prisma.agency.update({
      where: {
        id: agencyId,
      },
      data: {
        officeName,
        officeAddress,
        officeEmail,
        officePhone,
      },
    });

    return res.status(200).json({ data: updatedAgency });
  } catch (error) {
    console.error("Error updating agency:", error);
    return res.status(500).json({ message: "Error updating agency" });
  }
});

router.get("/:agencyId/members", auth, async (req, res) => {
  const { agencyId } = req.params;

  try {
    const members = await prisma.member.findMany({
      where: { agencyId },
      include: { user: true },
    });

    const memberData = members.map((m) => ({
      id: m.id,
      name: m.user.name, // Adjust according to your User model
      email: m.user.email,
      role: m.role,
    }));

    res.status(200).json({ members: memberData });
  } catch (error) {
    console.error("Error fetching agency members:", error);
    res.status(500).json({ message: "Error fetching agency members" });
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
      role: "Member", // Default role
    },
  });

  // Update invitation status to accepted
  await prisma.invitation.update({
    where: { id: invitation.id },
    data: { status: "Accepted" },
  });

  res.json({ success: "Joined the agency successfully" });
});

module.exports = router;
