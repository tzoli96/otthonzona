const prisma = require("../prisma/prisma");
const ActivityLog = require("./ActivityLog");
const { generate8DigitNumericId } = require("../utils/getId");
const { getConfig } = require("./coreConfig");
const bcrypt = require("bcryptjs");
const {logActivity} = require("./ActivityLog");

const agencyModel = {
  getValid: async (officeName, officeEmail, officePhone) => {
    try {
      const condition = await prisma.Agency.findFirst({
        where: {
          OR: [
            { officeName },
            { officeEmail },
            { officePhone },
          ]
        },
        select: { officeName: true },
      });

      if (condition) {
        throw new Error("This record is exist");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  validateParameters: async (data) => {
    try {
      let errors = {};

      if (data.officeName) {
        const name = await prisma.Agency.findFirst({
          where: {officeName: data.officeName},
          select: {officeName: true},
        });

        if (name) {
          errors.officeName = "Van már ilyen nevű iroda regisztrálva.";
        }
      } else {
        errors.officeName = "Irodai neve nem lehet üres."
      }

      if (data.officeEmail) {
        const email = await prisma.Agency.findFirst({
          where: {officeEmail: data.officeEmail},
          select: {officeEmail: true},
        });

        const userEmail = await prisma.user.findFirst({
          where: {email: data.officeEmail},
          select: {email: true},
        });

        if (email || userEmail) {
          errors.officeEmail = "Ez az email cím foglalt."
        }
      } else {
        errors.officeEmail = "Email cím nem lehet üres."
      }

      if (data.officePhone) {
        const phone = await prisma.Agency.findFirst({
          where: {officePhone: data.officePhone},
          select: {officePhone: true},
        });

        if (phone) {
          errors.officePhone = "Ezzel a telefonszámmal már van iroda regisztrálva"
        }
      } else {
        errors.officePhone = "Telefonszám nem lehet üres."
      }

      return errors;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  createAgency: async (data) => {
    try {
      await agencyModel.getValid(data.officeName, data.officeEmail, data.officePhone);
      const NormalUserRoleId = await getConfig("user/group/normal_id");
      const pwHash = await bcrypt.hash('123456', 10);

      const user = await prisma.user.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.officeEmail,
          phone: data.officePhone,
          pwHash: pwHash,
          emailConfirmationToken: null,
          userRoleId: NormalUserRoleId,
        },
      });

      const agent = await prisma.Agency.create({
        data: {
          officeName: data.officeName,
          officeAddress: data.officeAddress,
          officeEmail: data.officeEmail,
          officePhone: data.officePhone,
          officeCompany: data.officeCompany,
          network: data.network,
          isActive: false,
          photo: null,
          admin: {
            connect: {
              id: user.id
            }
          }
        },
      });

      await logActivity(
        user.id,
        'Register agency',
        `A felhasználó ingatlan iroda regisztrálási kérelmet nyújtott be`
      );

      return agent;
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  activateAgency: async (agencyId) => {
    try {
      const agency = await prisma.Agency.findUnique({
        where: {
          id: agencyId,
        },
      });

      if (agency) {
        const updatedAgency = await prisma.Agency.update({
          where: {
            id: agencyId,
          },
          data: {
            isActive: true,
          },
        });

        const activityDescription = `${agency.officeName} ingatlan iroda aktiválva lett`;
        ActivityLog.logActivity(agency.adminID, "Agency activate", activityDescription);

        return updatedAgency;
      } else {
        throw new Error("Érvénytelen bemenet.");
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  },

  deleteAgency: async (agencyId) => {
    try {
      const success = await prisma.Agency.delete({
        where: {
          id: agencyId,
        }
      });

      return success;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};

module.exports = agencyModel;
