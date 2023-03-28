import asyncHandler from 'express-async-handler'
import Comment from '../models/Comment.js';
import Post from '../models/Post.js'
export const createComment = asyncHandler(async (req, res) => {

    const comment = await Comment.create({
        body: req.body.comment,
        creator_name: req.body.user.username,
        creator_id: req.body.user._id
    })

    const post = await Post.findById(req.params.id)
    post.comments.push(comment._id)
    post.save()

    res.json(comment)




});