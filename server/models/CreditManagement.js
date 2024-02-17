const prisma = require("../prisma/prisma");
const ActivityLog = require("./ActivityLog");
const { generate8DigitNumericId } = require("../utils/getId");

const CreditManagement = {
    creditManipulate: async (userId, changeDirection, amount) => {
        try {
            const user = await prisma.User.findUnique({
                where: {
                    id: userId,
                },
            });

            if (user && amount !== undefined && (changeDirection === 'plus' || changeDirection === 'minus')) {
                let newCreditValue;

                if (changeDirection === 'plus') {
                    newCreditValue = user.credit + amount;
                } else {
                    newCreditValue = Math.max(0, user.credit - amount);
                }

                const updatedUser = await prisma.User.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        credit: newCreditValue,
                    },
                });

                const activityDescription = `${userId} felhasználótól ${changeDirection === 'plus' ? 'hozzáadtunk' : 'levontunk'} ${amount} összeget. Az új érték: ${newCreditValue}`;
                ActivityLog.logActivity(userId, "Credit manipulate", activityDescription);

                return updatedUser;
            } else {
                throw new Error("Érvénytelen bemenet. Ellenőrizze az amount és changeDirection értékeit.");
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    },
};

module.exports = CreditManagement;
