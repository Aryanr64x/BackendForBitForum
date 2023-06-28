import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    votes_count: {
        type: Number,
        default: 0
    },
    user_id: {
        type: String,
        required: [true, "A user ID is necessary"]
    },
    username: {
        type: String,
        required: [true, "A username is required"]
    },
    comments: [{
        type: String
    }],
    
    date: {
        type: Date,
        default: Date.now
    }

});


const Post = mongoose.model('Post', mongooseSchema)
export default Post;   
