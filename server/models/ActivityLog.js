const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");

const activityLogModel = {
  generateId: () => generate8DigitNumericId() + "",

  getValidId: async (id) => {
    try {
      const existingLog = await prisma.ActivityLog.findFirst({
        where: { id },
        select: { id: true },
      });

      if (existingLog) {
        throw new Error("Log with this ID already exists");
      }

      return id;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  validateParameters: (userId, subject, activity) => {
    if (!userId || !subject || !activity) {
      throw new Error("UserId, subject, and activity are required parameters");
    }
  },

  logActivity: async (userId, subject, activity) => {
    try {
      activityLogModel.validateParameters(userId, subject, activity);

      const id = activityLogModel.generateId();
      await activityLogModel.getValidId(id);

      const currentDate = new Date();

      await prisma.ActivityLog.create({
        data: {
          id,
          user_id: userId,
          subject: subject,
          activity: activity,
          created_at: currentDate,
        },
      });

      console.log(`Activity logged: UserId=${userId}, Subject=${subject}, Activity=${activity}`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

module.exports = activityLogModel;
