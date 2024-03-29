const express = require('express');
const router = express.Router();

const { createPost, getAllPosts } = require("../controllers/PostController");
const { createComment } = require("../controllers/CommentController");
const { likePost, unlikePost } = require("../controllers/LikeController");

router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/comments/create", createComment); 
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;