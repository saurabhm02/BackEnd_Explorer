const User = require("../modals/User.Modal");
const Post = require("../modals/Post.Modal");

exports.createPost = async (req, res) => {
    try {
        const { userId } = req.params;
        const { title, content } = req.body;

        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found with the provided ID",
            });
        }

        const response = await Post.create({
            user: userId, 
            title,
            content,
        });

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { Posts: response._id } },
            { new: true }
        ).populate("Posts").exec();

        res.status(200).json({
            success: true,
            message: "Post Created Successfully",
            data: updatedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while creating Post",
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find({userId}).populate("comments").populate("likes").exec();
        res.status(200).json({
            success: true,
            message: "Posts Retrieved Successfully",
            data: posts
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while getting all Posts",
        });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findByIdAndDelete(postId);
        res.status(200).json({
            success: true,
            message: "Post Deleted Successfully",
            data: post
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Facing issue while deleting Post",
        });
    }
};
