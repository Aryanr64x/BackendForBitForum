import asyncHandler from 'express-async-handler'
import Post from '../models/Post.js'

export const createPost = asyncHandler(async (req, res) => {
    const post = await Post.create({   //to insert a new entry in db 
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user._id,
        username: req.body.user.username
    })
    res.json({
        post: post
    })

});


export const getPosts = asyncHandler(async (req, res) => {

    const posts = await Post.find({});  // to select all entries  
    res.json({
        posts: posts
    })

});



export const getSinglePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    const comments = await Post.find({'_id': {$in:post.comments}})
    res.json({post, comments})


})





export const incease_votes = asyncHandler(async (req, res) => {

    let a = await Post.findById( req.params.id )  //SELECT AND WHERE 
    a.votes_count = a.votes_count + 1      //UPDATE 
    await a.save();
    res.json({ success: true })         //https://stackoverflow.com/questions/67043015/mongoose-access-current-value-before-updating-it-inside-findoneandupdate
});


export const decrease_votes = asyncHandler(async (req, res) => {

    let a = await Post.findById( req.params.id )  //SELECT AND WHERE 
    a.votes_count = a.votes_count - 1      //UPDATE 
    await a.save();
    res.json({ success: true })         //https://stackoverflow.com/questions/67043015/mongoose-access-current-value-before-updating-it-inside-findoneandupdate
});
