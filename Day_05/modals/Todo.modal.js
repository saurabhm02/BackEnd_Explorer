const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    description:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt:{
        type: Date,
        required: true,
        default: Date.now(),
    }
});
module.exports = mongoose.model("Todo", todoSchema);   