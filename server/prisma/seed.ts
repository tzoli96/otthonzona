const { createCoreConfig, updateConfig } = require("../models/coreConfig");
const { createUserRole, getUserRoleByName } = require("../models/UserRole");
const { createPermission, getPermissionByName } = require("../models/Permission");
const { createUserRolePermission } = require("../models/UserRolePermission");
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createOrGetRole(roleName: string) {
    try {
        return await createUserRole(roleName);
    } catch (error) {
        console.error(`Error creating role ${roleName}:`, error);
        return await getUserRoleByName(roleName);
    }
}

async function createOrGetPermission(permissionName: string) {
    try {
        return await createPermission(permissionName);
    } catch (error) {
        console.error(`Error creating permission ${permissionName}:`, error);
        return await getPermissionByName(permissionName);
    }
}

async function createAdminUserRoleAndPermission() {
    const AdminUserRole = await createOrGetRole("Admin");
    const NormalUserRole = await createOrGetRole("Normal");
    await createCoreConfig("user/group/normal_id",NormalUserRole.id);
    const adminPermission = await createOrGetPermission("admin");
    const adminUserActivity = await createOrGetPermission("admin.useractivity");
    const adminPermissionSetting = await createOrGetPermission("admin.permission");

    await createUserRolePermission(AdminUserRole.id, adminPermission.id);
    await createUserRolePermission(AdminUserRole.id, adminUserActivity.id);
    await createUserRolePermission(AdminUserRole.id, adminPermissionSetting.id);
}

async function main() {
    try {
        await createAdminUserRoleAndPermission();
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
