import asyncHandler from 'express-async-handler'
import Post from '../models/Post.js'

export const createPost = asyncHandler(async (req, res) => {
    const pos = await Post.create({   //to insert a new entry in db 
        title: req.body.title,
        body: req.body.body, 
    })
    res.json({
        post: {
            title: pos.title,    // it is map betihod 
            body :pos.body
        },
    })
    
});
export const getPost = asyncHandler(async (req, res) => {
    
 const posts =await Post.find({});  // to select all entries  
 res.json({
   posts:posts
})
 
    
});
export const incease_votes = asyncHandler(async (req, res) => {
    
    let a =await Post.findOne({_id})  //SELECT AND WHERE 
    a.votes_count=a.votes_count+1      //UPDATE 
    await a.save();    
       res.json({success:true})         //https://stackoverflow.com/questions/67043015/mongoose-access-current-value-before-updating-it-inside-findoneandupdate
   });
   export const decrease_votes = asyncHandler(async (req, res) => {
    
    let a =await Post.findOne({_id})  //SELECT AND WHERE 
    a.votes_count=a.votes_count-1      //UPDATE 
    await a.save();    
       res.json({success:true})         //https://stackoverflow.com/questions/67043015/mongoose-access-current-value-before-updating-it-inside-findoneandupdate
   });