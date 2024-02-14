const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");

const UserRolePermission = {
    generateId: () => generate8DigitNumericId() + "",

    getValid: async (id,userRoleId,permissionId) => {
        try {
            const idexist = await prisma.UserRolePermission.findFirst({
                where: { id  },
                select: { id: true },
            });

            if (idexist) {
                throw new Error("Permission with this ID already exists");
            }

            const condition = await prisma.UserRolePermission.findFirst({
                where: { userRoleId,  permissionId},
            });

            if (condition) {
                throw new Error("This record is exist");
            }

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

    createUserRolePermission: async (userRoleId,permissionId) => {
        try {
            UserRolePermission.validateParameters(userRoleId,permissionId);

            const id = UserRolePermission.generateId();
            await UserRolePermission.getValid(id,userRoleId,permissionId);

            return await prisma.UserRolePermission.create({
                data: {
                    id,
                    userRoleId: userRoleId,
                    permissionId: permissionId,
                },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    deletePermissionByPermissionId: async (userRoleId, permissionId) => {
        try {
            return await prisma.UserRolePermission.delete({
                where: {
                    userRoleId_permissionId: {
                        userRoleId: userRoleId,
                        permissionId: permissionId,
                    },
                },
            });
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    getUserRolePermissionById: async (userRoleId) => {
        try {
            const allPermission =  await prisma.Permission.findMany();
            const withUserPermission =  await prisma.UserRolePermission.findMany(
                {
                    where: { userRoleId:userRoleId },
                    select: { permissionId: true },
                }
            );

            return mergedPermissions = allPermission.map(permission => {
                const isSelected = withUserPermission.some(
                    userPermission => userPermission.permissionId === permission.id
                );
                return { ...permission, isSelected };
            });


        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    updateUserRolePermission: async (userRoleId,permissions) => {

        try {
            const userRolePermissions = await prisma.UserRolePermission.findMany(
                {
                    where: { userRoleId:userRoleId },
                    select: { permissionId: true },
                }
            );
            for (const permission of permissions) {

                const hasPermissionInDatabase = userRolePermissions.some(userRolePermission =>
                    userRolePermission.permissionId === permission.id
                );

                if (hasPermissionInDatabase) {
                    if (!permission.isSelected) {
                        await UserRolePermission.deletePermissionByPermissionId(userRoleId,permission.id);
                    }
                } else {
                    if (permission.isSelected) {
                        await UserRolePermission.createUserRolePermission(userRoleId,permission.id);
                    }
                }
            }
            return "ok";

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

};

module.exports = UserRolePermission;