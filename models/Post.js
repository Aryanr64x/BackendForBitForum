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
    },
    comments:[{
        body:{
            type : String,
            required:true,
        },
        creator_name:{
            type :string ,
            required :true,
        },
         creator_ID:{
            type :string ,
            required :true,
        },
        
    }]
    
    
});


const Post =  mongoose.model('Post', mongooseSchema)
export default Post;   //