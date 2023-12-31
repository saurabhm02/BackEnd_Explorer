import mongoose from "mongoose"

const categoraySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const Category = mongoose.modal("Category", categoraySchema);