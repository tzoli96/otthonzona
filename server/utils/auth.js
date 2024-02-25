const prisma = require("../prisma/prisma");
const jwt = require("jsonwebtoken");
const {getConfig} = require("../models/coreConfig");

exports.createUser = async ({ email, firstName, lastName, photo }) => {
    const NormalUserRoleId = await getConfig("user/group/normal_id");
    const user = await prisma.user.upsert({
        create: {
            email,
            firstName,
            lastName,
            isEmailVerified: true,
            photo,
            userRoleId:NormalUserRoleId
        },
        update: {},
        where: { email }
    });
    return user;
}

exports.getToken = async (user) => {
    return {
        data: {
            token: jwt.sign({ id: user.id }, process.env.SECRET),
            user,
        }
    }
}
