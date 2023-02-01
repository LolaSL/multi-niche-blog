import express from 'express';

const postsrouter = express.Router();

router.get('/', (req, res) => {
    res.json(" Those are my posts")
})

export default router;