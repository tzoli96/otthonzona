const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");

const PermissionModel = {
    generateId: () => generate8DigitNumericId() + "",

    getValid: async (id,name) => {
        try {
            const Permission = await prisma.Permission.findFirst({
                where: { id  },
                select: { id: true },
            });

            if (Permission) {
                throw new Error("Permission with this ID already exists");
            }

            const Name = await prisma.Permission.findFirst({
                where: { name  },
                select: { name: true },
            });

            if (Name) {
                throw new Error("Permission with this NAME already exists");
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

    createPermission: async (name) => {
        try {
            PermissionModel.validateParameters(name);

            const id = PermissionModel.generateId();
            await PermissionModel.getValid(id,name);

            return await prisma.Permission.create({
                data: {
                    id,
                    name: name
                },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getPermissionByName: async (name) => {
        try {
            PermissionModel.validateParameters(name);
            return await prisma.Permission.findFirst({
                where: { name  }
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    updatePermissionNameById: async (id,name) => {
        try {
            return await prisma.Permission.update({
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
    DeletePermission: async (id) => {
        try {
            return await prisma.Permission.delete({
                where: { id:id },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },

};

module.exports = PermissionModel;