const auth = require("../middleware/auth");
const router = require("express").Router();
const prisma = require("../prisma/prisma");


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

module.exports = router;
