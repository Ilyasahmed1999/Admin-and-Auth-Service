const authService = require("./service");
const { registerValidation, loginValidation } = require("./validation");

exports.register = async (req, res) => {
    try {
        // Validate request data
        const { error } = registerValidation(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });

        const result = await authService.register(req.body);
        return res.status(result.status).json({ message: result.message });
    } catch (err) {
        // Handle specific errors, such as unique constraint violations
        if (
            err.code === "P2002" &&
            err.meta &&
            err.meta.target.includes("email")
        ) {
            // Prisma's P2002 error code for unique constraint violations
            return res.status(409).json({ message: "User already exists" });
        }

        // Generic error handler for unexpected issues
        return res
            .status(500)
            .json({ message: "Internal Server Error", error: err.message });
    }
};

exports.login = async (req, res) => {
    // Validate request data
    const { error } = loginValidation(req.body);
    if (error)
        return res.status(400).json({ message: error.details[0].message });

    const result = await authService.login(req.body);
    return res
        .status(result.status)
        .json({ message: result.message, token: result.token }); // Include the token in the response
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await authService.getAllUsers();
        res.json({ status: 200, message: "Success", data: users });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.updateUser = async(req, res) =>  {
    const { id } = req.params;
    const data = req.body;

    try {
        const updatedUser = await authService.updateUser(id,data);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
}




