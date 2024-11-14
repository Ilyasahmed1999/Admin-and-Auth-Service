// src/services/restaurantService.js
const axios = require("axios");

// Set the base URL for restaurant-service
const USER_SERVICE_URL =
    process.env.USER_SERVICE_URL || "http://localhost:4000/auth";

class userService {

// Function to get all Users
async getAllUsers (token) {
    try {
        const response = await axios.get(
            `${USER_SERVICE_URL}/users`,
            {
                headers: { Authorization: token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching users from auth-service:",
            error.message
        );
        throw new Error("Could not fetch users");
    }
};


// Function to create User
async createUser (data, token) {
    try {
        const response = await axios.post(
            `${USER_SERVICE_URL}/register/`,
            {
                headers: { Authorization: token },
                body: data
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error in creating user in auth-service:",
            error.message
        );
        throw new Error("Error in creating user");
    }
};

// Function to update User
async updateUser (id,data, token) {
    try {
        const response = await axios.patch(
            `${USER_SERVICE_URL}/users/${id}`,data,
            {
                headers: { Authorization: token }
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error in updating user in auth-service:",
            error.message
        );
        throw new Error("Error in updating user");
    }
};

}
module.exports = new userService();
