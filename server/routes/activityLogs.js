const auth = require("../middleware/auth");
const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();
const prisma = new PrismaClient();

router.get("/", auth, async (req, res) => {
    try {
        const reasons = await prisma.ActivityLog.findMany();
        return res.status(200).json({ data: reasons });
    } catch (error) {
        console.error("Error fetching activity data:", error);
        return res.status(500).json({ message: "Error fetching activity data" });
    } finally {
        await prisma.$disconnect();
    }
});

module.exports = router;
