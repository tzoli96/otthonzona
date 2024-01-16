const prisma = require("../prisma/prisma");
const jwt = require("jsonwebtoken");

exports.createUser = async ({ email, firstName, lastName, photo }) => {
    const user = await prisma.user.upsert({
        create: {
            email,
            firstName,
            lastName,
            isEmailVerified: true,
            photo,
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
