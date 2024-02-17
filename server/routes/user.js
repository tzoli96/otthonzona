const express = require("express");
const prisma = require("../prisma/prisma");
const auth = require("../middleware/auth");
const { logActivity } = require("../models/ActivityLog");
const { updateConfig,getConfig } = require("../models/coreConfig");
const { getUserRoleById , updateRoleNameById,DeleteUserRole, createUserRole } = require("../models/UserRole");
const { createUserRolePermission , getUserRolePermissionById, updateUserRolePermission } = require("../models/UserRolePermission");
const { createPermission , updatePermissionNameById, DeletePermission } = require("../models/Permission");
const { creditManipulate } = require("../models/CreditManagement");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = require("express").Router();


router.put("/", auth, async (req, res) => {
  const data = req.body;

  const userId = req.user.id;
  const user = await prisma.user.findFirst({ where: { id: userId } });
  let pwHash;

  if (data.newPassword) {
    const isPasswordCorrect = await bcrypt.compare(
      data.currentPassword,
      user.pwHash || ""
    );
    if (isPasswordCorrect) {
    } else {
      throw new Error("Current password is incorrect");
    }
  }

  delete req.body.currentPassword;
  delete req.body.newPassword;

  const newUser = await prisma.user.update({
    where: { id: userId },
    data: {
      ...data,
      pwHash,
    },
  });

  return res.send({
    data: newUser,
  });
});

router.get("/my-properties", auth, async (req, res) => {
  const ads = await prisma.property.findMany({
    where: { submittedBy: req.user.id, isArchived: false },
  });
  return res.send({
    data: ads,
  });
});

router.get("/roles", auth, async (req, res) => {
  const ads = await prisma.UserRole.findMany();
  return res.send({
    data: ads,
  });
});
router.get("/permissions", auth, async (req, res) => {
  const ads = await prisma.Permission.findMany();
  return res.send({
    data: ads,
  });
});

router.get("/assign/permission/:id", auth, async (req, res) => {
  const ads = await getUserRolePermissionById(req.params.id)
  return res.send({
    data: ads,
  });
});

router.post("/assign/user-permission", auth, async (req, res) => {
  const ads = await updateUserRolePermission(
      req.body.entity.id,
      req.body.data.permissions
  );
  return res.send({
    data: ads,
  });
});

router.post("/permissions", auth, async (req, res) => {
  const permissions = await createPermission(req.body.name);
  return res.send({
    data: permissions,
  });
});

router.put("/permission/:id", auth, async (req, res) => {
  const ads = await updatePermissionNameById(req.params.id,req.body.name);
  return res.send({
    data: ads,
  });
});
router.delete("/permissions", auth, async (req, res) => {
  const ads = await DeletePermission(req.body.id);
  return res.send({
    data: ads,
  });
});
router.get("/current/role", auth, async (req, res) => {
  const ads = await getConfig("user/group/normal_id");
  return res.send({
    data: ads,
  });
});

router.get("/role/:id", auth, async (req, res) => {
  const { id } = req.params;
  const ads = await getUserRoleById(id);
  return res.send({
    data: ads,
  });
});
router.put("/role/:id", auth, async (req, res) => {
  const ads = await updateRoleNameById(req.params.id,req.body.name);
  return res.send({
    data: ads,
  });
});

router.post("/role/", auth, async (req, res) => {
  const ads = await createUserRole(req.body.name);
  return res.send({
    data: ads,
  });
});
router.delete("/role", auth, async (req, res) => {
  const ads = await DeleteUserRole(req.body.id);
  return res.send({
    data: ads,
  });
});

router.post("/update/role", auth, async (req, res) => {
  const ads = await updateConfig("user/group/normal_id",req.body.userRoleId);
  return res.send({
    data: ads,
  });

});



router.get("/credit-purchase-history", auth, async (req, res) => {
  const creditPurchaseHistory = await prisma.creditPurchaseHistory.findMany({
    orderBy: {
      purchasedAt: "desc",
    },
    where: {
      userId: req.user.id,
    },
  });

  return res.send({
    data: creditPurchaseHistory,
  });
});

///Drafts

router.get("/my-drafts", auth, async (req, res) => {
  const ads = await prisma.DraftProperty.findMany({
    where: { submittedBy: req.user.id },
  });
  return res.send({
    data: ads,
  });
});

router.post("/draft", auth, async (req, res) => {
  return res.status(200).json({
    data: "test",
  });
});

router.post("/save-property/:id", auth, async (req, res) => {
  const propertyId = parseInt(req.params.id);
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        savedProperties: {
          set: [...new Set([...user.savedProperties, propertyId])],
        },
      },
    });

    await logActivity(
        userId,
        "Saved Property",
        `Save  property with id ${propertyId}`
    );

    return res.status(200).json({
      data: updatedUser.savedProperties,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving property" });
  }
});

router.get("/saved-properties", auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        savedProperties: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the array of property IDs directly

    const properties = await prisma.property.findMany({
      where: {
        id: { in: user.savedProperties?.map((id) => id + "") || [] },
      },
    });

    return res.status(200).json({
      data: properties,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving saved property IDs" });
  }
});

router.post("/remove-saved-property/:id", auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedSavedProperties = user.savedProperties.filter(
      (propertyId) => propertyId !== parseInt(id)
    );

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        savedProperties: updatedSavedProperties,
      },
    });

    await logActivity(
        userId,
        "Removed Property from saved",
        `Removed from save  property with id ${propertyId}`
    );

    return res.status(200).json({
      message: "Property removed from favorites",
      savedProperties: updatedUser.savedProperties,
    });
  } catch (error) {
    console.error("Error removing property from favorites:", error);
    return res
      .status(500)
      .json({ message: "Error removing property from favorites" });
  }
});

router.post("/create-checkout-session", auth, async (req, res) => {
  const { amount, currency } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: process.env.PRICE_ID,
        quantity: amount,
      },
    ],
    metadata: {
      amount,
      currency,
      user: req.user.id,
    },
    automatic_tax: { enabled: true },
    billing_address_collection: "required",
    success_url: `${process.env.FRONTEND_URL}/bidding?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL}/bidding`,
  });

  res.json({ id: session.id });
});
router.use(express.text());
router.post("/handle-stripe", express.text(), async (req, res) => {
  const sig = req.headers["stripe-signature"];

  // Log the incoming request for debugging
  console.log("Received Stripe webhook:", req.body);
  console.log("Headers:", req.headers);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_ACCOUNT_WEBHOOK_SECRET
    );
  } catch (err) {
    event = err.payload;
  }

  const session = event.data.object;
  const userId = session.metadata.user;
  const amount = session.metadata.amount;
  const currency = session.metadata.currency;

  if (event.type === "checkout.session.completed") {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        credit: {
          increment: parseInt(amount),
        },
      },
    });

    // Log the successful credit update
    console.log(`Credit updated for user ${userId}:`, updatedUser);

    await saveCreditPurchase({
      userId,
      event,
      amount,
      currency,
      paymentStatus: "sikeres",
    });

    res.status(200).json({ message: "Credit added successfully" });
  } else {
    /*await saveCreditPurchase({
      userId,
      event,
      amount,
      currency,
      paymentStatus: "hiba",
    });*/

    console.log("Unhandled event type:", event.type);
    res.status(200).json({ message: "Unhandled event type" });
  }
});

async function saveCreditPurchase(data) {
  const insertedCreditPurchase = await prisma.creditPurchaseHistory.create({
    data: {
      userId: data.userId,
      paymentStatus: data.paymentStatus,
      paymentTransactionId: data.event?.id,
      purchasedCredit: data.amount,
      spentMoney: data.currency,
    },
  });

  await logActivity(
      data.userId,
      "Credit purchase",
      `Creadit pruchase: ${data.amount}`
  );

  // Log the successful saving of credit history
  console.log(
    `Credit history saved for user ${data.userId}:`,
    insertedCreditPurchase
  );
}


/////User Credit management
router.get("/admin/users", auth, async (req, res) => {
  const users = await prisma.User.findMany();
  return res.send({
    data: users,
  });
});

router.post("/admin/credit/manipulate", auth, async (req, res) => {
  const response = await creditManipulate(req.body.userid,req.body.changedirection,req.body,ammount);
  return res.send({
    data: response,
  });
});

module.exports = router;
