import express from 'express';

import { register } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/register', register)
authRouter.post('/register', register)
authRouter.post('/register', register)

export default postRouter;