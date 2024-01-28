const Post = require("../modals/post.modal");
const Comment = require("../modals/comment.modal");

exports.createComment = async(req, res) =>{
    try{
        const { post, user, body } = req.body;
        const comment = new Comment({
            post, user, body
        });
        const savedComment = await comment.save(); // save the comment in the database

        // update the post with the comment id and send it on the post. comment array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } },
            { new: true })
            .populate("comments") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
          err: "Something went wrong while creating comment",
        });
    }
      
}
