import express from 'express';

const postRouter = express.Router();

postRouter.get('/', (req, res) => {
    res.json(" Those are my posts")
})

export default postRouter;