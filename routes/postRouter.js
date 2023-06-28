import express from 'express'
import { createPost, decrease_votes, getPosts, getSinglePost, incease_votes } from '../controllers/postController.js';
import { protect } from '../controllers/authController.js';
import { createComment } from '../controllers/commentController.js';

const postRouter = express.Router();

postRouter.get('/', getPosts).post('/', protect, createPost).get('/:id', getSinglePost).post('/:id/comment',protect, createComment)
.patch('/:id/upvote', protect ,incease_votes ).patch('/:id/downvote', protect, decrease_votes)

export default postRouter;

