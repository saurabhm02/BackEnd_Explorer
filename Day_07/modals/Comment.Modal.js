const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    // post: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    // },
    user:{
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);