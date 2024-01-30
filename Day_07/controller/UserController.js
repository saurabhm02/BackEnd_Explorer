const User = require("../modals/User.Modal");

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, cPassword } = req.body;
        if (!username || !email || !password || !cPassword) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });
        }

        if (password !== cPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        const response = await User.create({
            username,
            email,
            password,
            cPassword
        });

        res.status(200).json({
            success: true,
            message: "User Account Created Successfully",
            data: response
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while creating user Account",
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate("Posts");
        res.status(200).json({
            success: true,
            message: "Users Retrieved Successfully",
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while getting all Users",
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate("Posts");
        res.status(200).json({
            success: true,
            message: "User Retrieved Successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while getting user",
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "User Account Deleted Successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while deleting user Account",
        });
    };
}
