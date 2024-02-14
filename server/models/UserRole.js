const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");

const userRoleModel = {
    generateId: () => generate8DigitNumericId() + "",

    getValid: async (id,name) => {
        try {
            const userRoleId = await prisma.UserRole.findFirst({
                where: { id  },
                select: { id: true },
            });

            if (userRoleId) {
                throw new Error("UserRole with this ID already exists");
            }

            const userRoleName = await prisma.UserRole.findFirst({
                where: { name  },
                select: { name: true },
            });

            if (userRoleName) {
                throw new Error("UserRole with this name already exists");
            }

            return id;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    validateParameters: (name) => {
        if (!name) {
            throw new Error("Name is required parameter");
        }
    },

    createUserRole: async (name) => {
        try {
            userRoleModel.validateParameters(name);

            const id = userRoleModel.generateId();
            await userRoleModel.getValid(id,name);

            return await prisma.UserRole.create({
                data: {
                    id,
                    name: name
                },
            });

        } catch (err) {
            return false;
        }
    },
    DeleteUserRole: async (id) => {
        try {
            return await prisma.UserRole.delete({
                where: { id:id },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getUserRoleByName: async (name) => {
        try {
            userRoleModel.validateParameters(name);

            return await prisma.UserRole.findFirst({
                where: { name  }
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getUserRoleById: async (id) => {
        try {
            return await prisma.UserRole.findFirst({
                where: { id  }
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    updateRoleNameById: async (id,name) => {
        try {
            return await prisma.UserRole.update({
                where: { id: id },
                data: {
                    name:name
                },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    assignUserToUserRole: async (user,userRoleId) => {
        try {
            return await prisma.user.update({
                where: { id: user.id },
                data: {
                    userRoleId:userRoleId
                },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },

};

module.exports = userRoleModel;