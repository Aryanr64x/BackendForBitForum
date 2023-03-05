import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
     body:{
        type: String,
        required: true
    },
    votes_count:{
        type : Integer,
        default:0           // like button in ig jesa kch
    }
    
    
});


const Post =  mongoose.model('Post', mongooseSchema)
export default Post;