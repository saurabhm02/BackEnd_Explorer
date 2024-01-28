const Post = require("../modals/post.modal");

exports.createPost = async (req, res) => {
    try{
        const { author, title, content } = req.body;
        const post = new Post({
            author, title, content
        });
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while creating post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        
        res.json({
            data: posts,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            err: "Something went wrong while getting all posts"
        })
    }
}