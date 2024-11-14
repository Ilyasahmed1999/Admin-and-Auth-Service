const UserModel = require("./model");

class UserRepository {
    static async createUser(userData) {
        return await UserModel.createUser(userData);
    }

    static async findUserByEmail(email) {
        return await UserModel.findUserByEmail(email);
    }

    static async getAllUsers() {
        return await UserModel.getAllUsers();
    }

    static async updateUser(id, updateData) {
        return await UserModel.updateUser(id,updateData);
    }

}

module.exports = UserRepository;
