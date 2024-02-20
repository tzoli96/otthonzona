const auth = require("../middleware/auth");
const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");
const { logActivity } = require("../models/ActivityLog");

const router = require("express").Router();

const getValidId = async () => {
  try {
    const id = generate8DigitNumericId() + "";
    const draftProperty = await prisma.DraftProperty.findFirst({
      where: { id },
      select: { id: true },
    });

    if (draftProperty) {
      throw new Error("Already exist");
    }

    return id;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

router.post("/", auth, async (req, res) => {
  const id = await getValidId();

  const ad = await prisma.DraftProperty.create({
    data: {
      id,
      ...req.body,
      submittedBy: req.user.id,
    },
  });
  return res.send({
    status: "SUCCESS",
    data: ad,
  });
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const ad = await prisma.DraftProperty.findFirst({ where: { id } });
  if (ad.submittedBy !== req.user.id) {
    return res.status(401).send({
      error: true,
      message: "Ezt az piszkozatott nincs jogosultságod szerkeszteni.",
    });
  }
  const updatedAd = await prisma.DraftProperty.update({
    where: { id },
    data: req.body,
  });
  return res.send({
    data: updatedAd,
  });
});

router.delete("/delete", auth, async (req, res) => {
  try {
    await prisma.DraftProperty.delete({
      where: { id: req.body.id},
    });
    return res.json({ success: true });
  } catch (error) {
    console.error("Hiba a DraftProperty törlése közben:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.DraftProperty.findUnique({
    where: { id},
  });
  return res.send({
    data,
  });
});

module.exports = router;
