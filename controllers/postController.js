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