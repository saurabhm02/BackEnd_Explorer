const mongoose = require('mongoose');

const dislikeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user:{
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Dislike", dislikeSchema);
