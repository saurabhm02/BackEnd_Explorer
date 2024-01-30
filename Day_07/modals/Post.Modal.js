const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 1000,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dislike",
    }],


}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);