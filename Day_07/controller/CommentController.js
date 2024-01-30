const Post = require("../modals/Post.Modal");
const Comment = require("../modals/Comment.Modal");

exports.createComment = async(req, res)=>{
    try{
        const { postId } = req.params;
        const { user, content } = req.body;
        const response = await Comment.create({
            postId,
            user,
            content,
        });
        
        const updatedPost = await Post.findByIdAndUpdate(postId, { $push: { comments: response._id } }, { new: true })
            .populate("comments")
            .exec();
        
        res.status(201).json({
            message: "Comment created successfully",
            post: updatedPost
        });
        
        
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while creating comment"
        })
    }
}