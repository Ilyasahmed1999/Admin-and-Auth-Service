// src/customer/routes.js
const express = require("express");
const adminController = require("./controller");
const { authenticateToken, authorizeRoles } = require("./middleware");

const router = express.Router();

// Apply the authentication middleware to all routes
router.use(authenticateToken);

// Apply the role-based access control for the ADMIN role related routes
router.use(authorizeRoles("ADMIN"));

// Hello World endpoint (accessible by any authenticated user)
router.get("/api/admins", (req, res) => {
    res.json({ message: "Hello from Admin Service!" });
});

//Orders
// Get all orders
router.get("/api/orders", adminController.getAllOrders);

// Get order by ID
router.get("/api/orders/:id", adminController.getOrderById);

// Update Order status and Delivery status
router.patch("/api/orders/:id", adminController.updateOrder);

//Users

// Get all users
router.get("/api/users", adminController.getAllUsers);

// Create User Details
router.post("/api/users/", adminController.createUser);

// Update User Details 
router.patch("/api/users/:id", adminController.updateUser);

//Reports

//Order Trends
router.get("/api/ordertrends", adminController.getOrderTrends);


//Monitoring

// Get Order Status
router.get("/api/orderstatus", adminController.getOrderStatus);


module.exports = router;