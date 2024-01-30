const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min: 6,
    },
    cPassword:{
        type: String,
        required: true,
        min: 6,
    },
    Posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);