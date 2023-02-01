import express from 'express';

import { register } from '../controllers/auth.js';

const postRouter = express.Router();

postRouter.post('/register', register)

export default postRouter;