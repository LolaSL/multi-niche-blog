import express from 'express';

const router = express.Router();

router.get('/posts', (req, res) => {
    res.json(" Those are my posts")
})

export default router;