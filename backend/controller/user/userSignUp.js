const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        // Input Validation
        if (!email || !password || !name) {
            return res.status(400).json({
                message: "Please provide email, password, and name",
                error: true,
                success: false,
            });
        }

        // Check if user already exists
        const user = await userModel.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "User already exists.",
                error: true,
                success: false,
            });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create user
        const payload = {
            email,
            name,
            role: "GENERAL",
            password: hashPassword,
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        // Remove password from response
        const { password: _, ...userWithoutPassword } = saveUser._doc;

        res.status(201).json({
            data: userWithoutPassword,
            success: true,
            error: false,
            message: "User created successfully!",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Something went wrong",
            error: true,
            success: false,
        });
    }
}

module.exports = userSignUpController;
