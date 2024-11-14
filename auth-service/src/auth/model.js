const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserModel {
    static async createUser(data) {
        try {
            return await prisma.user.create({ data });
        } catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Failed to create user");
        }
    }

    static async findUserByEmail(email) {
        try {
            return await prisma.user.findUnique({
                where: { email },
            });
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw new Error("Failed to find user");
        }
    }

    static async getAllUsers() {
        try {
          return await prisma.user.findMany();
        } catch (error) {
            console.error("Error getting user:", error);
            throw new Error("Failed to get user");
        }
    }

    static async updateUser(id, updateData) {
        try{
            return await prisma.user.update({
                where: { id: parseInt(id) },
                data: updateData,
            });
        } catch (error) {
            console.error("Error updating user:", error);
            throw new Error("Failed to update user");
        }
    }

}

module.exports = UserModel;
