import mongoose from "mongoose";



const mongooseSchema = mongoose.Schema(
     {
        
        title:{
            type: String,
            required: true
        },
         body:{
            type: String,
            required: true
        },
        // votes count 
      
    });


const Post =  mongoose.model('Post', mongooseSchema)
export default Post;


