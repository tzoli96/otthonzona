const prisma = require("../prisma/prisma");
const { generate8DigitNumericId } = require("../utils/getId");

const coreConfigModel = {
    generateId: () => generate8DigitNumericId() + "",

    getValid: async (id,path) => {
        try {
            const existingCoreConfig = await prisma.coreConfig.findFirst({
                where: { id  },
                select: { id: true },
            });

            if (existingCoreConfig) {
                throw new Error("Core Config with this ID already exists");
            }

            const existingCoreConfigPath = await prisma.coreConfig.findFirst({
                where: { path  },
                select: { path: true },
            });

            if (existingCoreConfigPath) {
                throw new Error("Core Config with this Path already exists");
            }

            return id;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    validateParameters: (path, value) => {
        if (!path  || !value) {
            throw new Error("Path, value are required parameters");
        }
    },

    createCoreConfig: async (path, value) => {
        try {
            coreConfigModel.validateParameters(path, value);

            const id = coreConfigModel.generateId();
            await coreConfigModel.getValid(id,path);

            await prisma.coreConfig.create({
                data: {
                    id,
                    path: path,
                    value: value
                },
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    updateConfig: async (path, newValue) => {
        try {
            coreConfigModel.validateParameters(path, newValue);
            await prisma.coreConfig.update({
                where: { path: path },
                data: {
                    value: newValue,
                },
            });
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getConfig: async (path) => {
        try {
            const config = await prisma.coreConfig.findUnique({
                where: { path: path },
                select: { value: true },
            });

            return config.value;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

};

module.exports = coreConfigModel;