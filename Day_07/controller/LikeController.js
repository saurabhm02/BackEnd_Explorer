const Post = require("../modals/Post.Modal");
const Like = require("../modals/Like.Modal");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const response = await Like.create({
            post, user
        });

        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: response._id } },
            { new: true })
            .populate("likes")
            .exec();

        res.status(201).json({
            message: "Like created successfully",
            post: updatedPost
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while liking post"
        });
    }
};


exports.unlikePost = async (req, res) =>{
    try{
        const { post, like } = req.body;
        const response = await Like.findOneAndDelete({
            post: post, _id:like
        });

        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: response._id } },
            { new: true });

        res.json({
            message: "Like deleted successfully",
            post: updatedPost,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while unliking post"
        });
    }
};