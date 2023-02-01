import express from 'express';

const postRouter = express.Router();

postRouter.get('/test', addPost)

export default postRouter;