const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const prisma = require("../prisma/prisma");

const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

require("dotenv").config();
const router = express.Router();

router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize passport
router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_URL + "/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const { displayName, emails } = profile;
      const email = emails?.[0]?.value;
      const [firstName, lastName] = displayName.split(" ");
      await createUser({ firstName, lastName, email });
      return done(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_URL + "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const { displayName, emails, photos } = profile;
      const [firstName, lastName] = displayName.split(" ");
      const email = emails?.[0]?.value;
      const photo = photos?.[0]?.value;

      await createUser({ firstName, lastName, email, photo });

      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: process.env.FRONTEND_URL + "/get-social-login",
    failureRedirect: "/",
  })
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL + "/get-social-login",
    failureRedirect: "/",
  })
);

router.get("/social-login", async (req, res) => {
  const email = req.user?.emails?.[0]?.value;
  if (email) {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    const tokens = await getToken(user);
    res.send(tokens);
  } else {
    res.status(401).send({ error: "failed" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({ where: { email } });

  if (user) {
    if (!user.isEmailVerified) {
      return res.send({ error: "Email not verified" });
    }
    if (await bcrypt.compare(password, user.pwHash || "")) {
      return res.send({
        data: {
          token: jwt.sign({ id: user.id }, process.env.SECRET),
          user,
        },
      });
    } else return res.send({ error: "Incorrect email or password" });
  } else {
    res.send({ error: "Incorrect email or password" });
  }
});

const fs = require("fs");
const nodemailer = require("nodemailer");
const wrapEmail = require("../utils/wrapEmail");
const wrapEmailPasswordReset = require("../utils/wrapEmailPasswordReset");
const { getToken, createUser } = require("../utils/auth");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;
    const pwHash = await bcrypt.hash(password, 10);

    // Generate email confirmation token
    const emailConfirmationToken = crypto.randomBytes(20).toString("hex");

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        pwHash,
        emailConfirmationToken, // Assuming you have a field for this in your User model
      },
    });

    const logToFile = (message) => {
      fs.appendFileSync(
        "mailgun.log",
        `${new Date().toISOString()} - ${message}\n`
      );
    };

    let transporter = nodemailer.createTransport({
      host: "mail.otthonzona.com",
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@otthonzona.com",
        pass: "n8yewXbyP$SRcc",
      },
    });

    // Sending email
    const link = `http://otthonzona.com/confirm-email/${emailConfirmationToken}`;

    console.log(
      wrapEmail(
        `Az alábbi linkre kattintva tudod megerősíeni email címedet: ${link}`
      )
    );

    let info = await transporter.sendMail({
      from: '"OtthonZona.com" <no-reply@otthonzona.com>',
      to: email,
      subject: "Email cím megerősítése",
      html: wrapEmail({
        title: "Email cím megerősítése",
        content: `${link}`,
      }),
    });

    console.log("Message sent: %s", info.messageId);

    return res.send({
      data: user,
    });
  } catch (err) {
    console.log("ERR", err);
    if (err.code === "P2002") {
      res.send({ error: "Email already exists" });
    }
  }
});

// Add this route to confirm the email
router.get("/confirm-email/:token", async (req, res) => {
  const { token } = req.params;
  const user = await prisma.user.findFirst({
    where: { emailConfirmationToken: token },
  });

  if (!user) {
    return res.status(400).send({ error: "Invalid token" });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { isEmailVerified: true, emailConfirmationToken: null }, // Assuming you have an emailConfirmed field in your User model
  });

  res.send({ success: "Email confirmed" });
});

router.post("/forgot-password", async (req, res) => {
  console.log("Received forgot-password request:", req.body); // Log received data

  const { email } = req.body;
  const user = await prisma.user.findFirst({ where: { email } });

  console.log("User found for forgot-password:", user); // Log user found or not

  if (!user) {
    return res
      .status(400)
      .send({ error: "User with this email does not exist" });
  }

  // Generate a reset token
  const resetToken = crypto.randomBytes(20).toString("hex");

  console.log("Generated reset token:", resetToken); // Log reset token

  // Store reset token in the database against the user
  await prisma.user.update({
    where: { id: user.id },
    data: { resetToken },
  });

  let transporter = nodemailer.createTransport({
    host: "mail.otthonzona.com",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@otthonzona.com",
      pass: "n8yewXbyP$SRcc",
    },
  });

  // Send an email with the reset token
  const link = `http://otthonzona.com/reset-password/${resetToken}`;

  console.log(
    wrapEmailPasswordReset(
      `Az alábbi linkre kattintva tudod megváltoztatni jelszavadat: ${link}`
    )
  );

  let info = await transporter.sendMail({
    from: '"OtthonZona.com" <no-reply@otthonzona.com>',
    to: email,
    subject: "Jelszó helyreállítása",
    html: wrapEmailPasswordReset({
      title: "Jelszó helyreállítása",
      content: `${link}`,
    }),
  });
});

// Reset Password route
router.post("/reset-password/:token", async (req, res) => {
  console.log("Received reset-password request:", req.body); // Log received data

  const { newPassword } = req.body;
  const { token } = req.params;

  // Find the user associated with the reset token
  const user = await prisma.user.findFirst({
    where: { resetToken: token },
  });

  console.log("User found for reset-password:", user); // Log user found or not

  if (!user) {
    return res.status(400).send({ error: "Invalid reset token" });
  }

  // Hash the new password
  const newPwHash = await bcrypt.hash(newPassword, 10);

  // Update the user's password and reset the token
  await prisma.user.update({
    where: { id: user.id },
    data: { pwHash: newPwHash, resetToken: null },
  });

  res.send({ message: "Password successfully reset" });
});

router.post("/send-details", async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "mail.otthonzona.com",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@otthonzona.com",
      pass: "n8yewXbyP$SRcc",
    },
  });

  try {
    const {
      officeName,
      network,
      officePhone,
      officeEmail,
      firstName,
      lastName,
      officeCompany,
      officeAddress,
    } = req.body;

    // Prepare the email content
    const emailContent = `
          <h1>Iroda regisztráció</h1>
          <p><strong>Vezetéknév:</strong> ${lastName}</p>
          <p><strong>Keresztnév:</strong> ${firstName}</p>
          <p><strong>Iroda neve:</strong> ${officeName}</p>
          <p><strong>Hálózat:</strong> ${network}</p>
          <p><strong>Iroda telefonszáma</strong> ${officePhone}</p>
          <p><strong>Iroda email címe</strong> ${officeEmail}</p>
          <p><strong>Iroda cégnév</strong> ${officeCompany}</p>
          <p><strong>Iroda címe</strong> ${officeAddress}</p>
      `;

    // Send an email
    let info = await transporter.sendMail({
      from: '"OtthonZona.com" <no-reply@otthonzona.com>',
      to: "iroda@otthonzona.com", // Replace with your company email address
      subject: "Irodai regisztráció",
      html: emailContent,
    });

    console.log("Message sent: %s", info.messageId);
    res.send({ message: "Details sent successfully" });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).send({ error: "Failed to send details" });
  }
});

module.exports = router;
