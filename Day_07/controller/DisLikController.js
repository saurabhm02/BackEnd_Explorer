const Post = require("../modals/Post.Modal");
const disLike = require("../modals/DisLike.Modal");

exports.disLikePost = async (req, res)=>{
    try{
        const { post, user } = req.body;
        const response = await disLike.create({
            post, user
        });
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { dislikes: response._id } },
            { new: true })
            .populate("dislikes").exec();

        res.status(201).json({
            message: "Dislike created successfully",
            post: updatedPost
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while disliking post"
        });
    }
};

exports.removeDislike = async (req, res) =>{
    try{
        const { post, dislike } = req.body;
        const response = await disLike.findByIdAndDelete({ post: post, _id: dislike});
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { dislikes: response._id } },
            { new: true });

        res.status(201).json({
            message: "Dislike removed successfully",
            post: updatedPost
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while removing dislike"
        });
    }
}