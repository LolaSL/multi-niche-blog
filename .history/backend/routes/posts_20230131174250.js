import express from 'express';
const { addPost } = require ('../controllers/post.js');

const postRouter = express.Router();

postRouter.get('/test', addPost)

export default postRouter;