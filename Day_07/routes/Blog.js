const express = require('express');
const router = express.Router();

const { createUser, getUser, getAllUsers, deleteUser } = require("../controller/UserController");
const { createPost, getAllPosts, deletePost } = require("../controller/PostController")
const { createComment } = require("../controller/CommentController");
const { likePost, unlikePost } = require("../controller/LikeController");
const { disLikePost, removeDislike } = require("../controller/DisLikController");

// User Routes
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);

// Post Routes
router.post('/users/:id/posts', createPost);
router.get('/users/:id/posts', getAllPosts);
router.delete('/users/:id/posts/:postId', deletePost);

// Comment Routes
router.post('/posts/:postId/comments', createComment);

// Like Routes
router.post('/posts/:postId/likes', likePost);
router.delete('/posts/:postId/likes', unlikePost);

// Dislike Routes
router.post('/posts/:postId/dislikes', disLikePost);
router.delete('/posts/:postId/dislikes', removeDislike);


module.exports = router;