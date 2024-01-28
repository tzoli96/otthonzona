const auth = require("../middleware/auth");
const router = require("express").Router();
const prisma = require("../prisma/prisma");

router.get("/",async (req, res) => {
    try {
        const activityLogs = await prisma.ActivityLog.findMany({
            include: {
                user: true,
            },
        });

        return res.status(200).json({ data: activityLogs });
    } catch (error) {
        console.error('Error fetching activity data:', error);
        return res.status(500).json({ message: 'Error fetching activity data' });
    } finally {
        await prisma.$disconnect();
    }
});

module.exports = router;
