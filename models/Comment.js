import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    creator_name: {
        type: String,
        required: true,
    },
    creator_id: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Comment = mongoose.model('Comment', mongooseSchema)
export default Comment;   
