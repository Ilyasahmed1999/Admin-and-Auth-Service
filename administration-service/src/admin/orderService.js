// src/services/restaurantService.js
const axios = require("axios");

// Set the base URL for restaurant-service
const ORDER_SERVICE_URL =
    process.env.ORDER_SERVICE_URL || "http://localhost:5001/api";

class orderService {
// Function to get all Orders
async getAllOrders (token) {
    try {
        const response = await axios.get(
            `${ORDER_SERVICE_URL}/orders`,
            {
                headers: { Authorization: token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching orders from customer-service:",
            error.message
        );
        throw new Error("Could not fetch orders");
    }
};

// Function to get Order By Id
async getOrderById (id, token) {
    try {
        const response = await axios.get(
            `${ORDER_SERVICE_URL}/orders/${id}`,
            {
                headers: { Authorization: token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching order from customer-service:",
            error.message
        );
        throw new Error("Could not fetch order");
    }
};

// Function to update Order
async updateOrder (id,data, token) {
    try {
        const response = await axios.patch(
            `${ORDER_SERVICE_URL}/orders/${id}`,data,
            {
                headers: { Authorization: token }
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error in updating order in customer-service:",
            error.message
        );
        throw new Error("Error in updating order");
    }
};

// Function to get Order Status
async getOrderStatus (token) {
    try {
        const response = await axios.get(
            `${ORDER_SERVICE_URL}/orders`,
            {
                headers: { Authorization: token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching orders from customer-service:",
            error.message
        );
        throw new Error("Could not fetch orders");
    }
};

// Function to get Order Status
async getOrderTrends (token) {
    try {
        const response = await axios.get(
            `${ORDER_SERVICE_URL}/orders`,
            {
                headers: { Authorization: token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching orders from customer-service:",
            error.message
        );
        throw new Error("Could not fetch orders");
    }
};

}
module.exports = new orderService();
