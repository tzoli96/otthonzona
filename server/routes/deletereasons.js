const auth = require("../middleware/auth");
const { PrismaClient } = require("@prisma/client");
const {generate8DigitNumericId} = require("../utils/getId");
const router = require("express").Router();
const prisma = new PrismaClient();

const getValidReasonEntityId = async () => {
  try {
    const id = generate8DigitNumericId() + "";
    const reasonEntityId = await prisma.PropertyDeleteReasonEntity.findFirst({
      where: { id },
      select: { id: true },
    });
    if (reasonEntityId) {
      throw new Error("Already exist");
    }
    return id;
  } catch (err) {
    return getValidId();
  }
};


router.get("/", auth, async (req, res) => {
  try {
    const reasons = await prisma.PropertyDeleteReasons.findMany();
    return res.status(200).json({ data: reasons });
  } catch (error) {
    console.error("Error fetching reasons data:", error);
    return res.status(500).json({ message: "Error fetching reasons data" });
  } finally {
    await prisma.$disconnect();
  }
});

const createReasonEntity = async (reasonId, userId) => {
  if (!reasonId || !userId) {
    throw new Error("Both 'reasonId' and 'userId' are required.");
  }

  try {
    return await prisma.PropertyDeleteReasonEntity.delete({
      where: {
        reason_id: reasonId,
        user_id: userId,
      },
    });
  } catch (error) {
    console.error("Error creating reason entity:", error);
    throw new Error("Error creating reason entity");
  }
};

const deleteReasonEntityById = async (id) => {
  if (!id) {
    throw new Error("'id' is required.");
  }

  try {
    await prisma.PropertyDeleteReasonEntity.delete({
      where: { id }
    });

  } catch (error) {
    console.error("Error deleting reason entity:", error);
    throw new Error("Error deleting reason entity");
  }
};

module.exports = router;
