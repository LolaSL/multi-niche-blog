const express =require('express');

const { register, login, logout, } = require('../controllers/auth.js');

const authRouter = express.Router();

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

export default postRouter;