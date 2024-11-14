// src/customer/controller.js
const userService = require("./userService");
const orderService = require("./orderService");

class adminController {
 
    async getAllUsers(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const users = await userService.getAllUsers(
                token
            );
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching users: " + error,
            });
        }
    }

    async createUser(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const data = req.body;
            const createdUser = await userService.createUser(data,
                token
            );
            res.status(200).json(createdUser);
        } catch (error) {
            res.status(500).json({
                message: "Error Creating user: " + error,
            });
        }
    }

    async updateUser(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const { id } = req.params;
            const data = req.body;
            const updatedUser = await userService.updateUser(id, data,
                token
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({
                message: "Error updating user: " + error,
            });
        }
    }

    async getAllOrders(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const orders = await orderService.getAllOrders(
                token
            );
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching orders: " + error,
            });
        }
    }

    async getOrderById(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const { id } = req.params;
            const order = await orderService.getOrderById(id, 
                token
            );
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching order: " + error,
            });
        }
    }

    async updateOrder(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const { id } = req.params;
            const data = req.body;
            const updatedOrder = await orderService.updateOrder(id, data,
                token
            );
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(500).json({
                message: "Error updating order: " + error,
            });
        }
    }

    async getOrderStatus(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const orders = await orderService.getOrderStatus(
                token
            );
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching orders: " + error,
            });
        }
    }

    async getOrderTrends(req, res) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied: No Token Provided" });
            }
            const orders = await orderService.getOrderTrends(
                token
            );
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({
                message: "Error fetching orders: " + error,
            });
        }
    }



}

module.exports = new adminController();
