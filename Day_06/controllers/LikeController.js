const Like = require("../modals/like.model");
const Post = require("../modals/post.modal");

exports.likePost = async(req, res) =>{
    try{
        const { post, user } = req.body;
        const like = new Like({
            post, user
        });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } },
            { new: true })
            .populate("likes") //Populates the comment array with the comments document
            .exec();
        
        res.json({
            post: updatedPost,
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
          err: "Something went wrong while creating like",
        });
    }
}


exports.unlikePost = async(req, res) =>{
    try{
        const { post, like } = req.body;
        const deletedLike = await Like.findOneAndDelete({ post: post, _id:like });

        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true });

        res.json({
            post: updatedPost,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
          err: "Something went wrong while deleting like",
        });
    }
}