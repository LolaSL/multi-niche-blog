import express from 'express';
import { addPost } from '../controllers/post.js';

const postRouter = express.Router();

postRouter.post('/register', addPost)

export default postRouter;