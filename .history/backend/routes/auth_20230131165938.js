import express from 'express';
import { addPost } from '../controllers/post.js';

const postRouter = express.Router();

postRouter.post('/test', addPost)

export default postRouter;