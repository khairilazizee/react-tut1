import mongoose from "mongoose";

const { Schema } = mongoose;

const modelName = "Post";

// Check if the model already exists
const existingModel = mongoose.models[modelName];

// If the model already exists, use it; otherwise, create a new one
const Post = existingModel || mongoose.model(modelName, new Schema({
    title: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true }));

export default Post;
