import express from 'express';

const postRouter = express.Router();

postRouter.get('/test', add)

export default postRouter;