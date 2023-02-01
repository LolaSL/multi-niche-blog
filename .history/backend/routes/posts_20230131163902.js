import express from 'express';

const postRouter = express.Router();

router.get('/', (req, res) => {
    res.json(" Those are my posts")
})

export default postRouter;