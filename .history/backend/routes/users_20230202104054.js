const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
const{cookieExtractor } = require ('../middlewares/passport_middleware.js')
const userRouter = express.Router();

userRouter.get('/', cookieExtractor , getUsers);
userRouter.get('/:id',checkAuthentication , getUserById);

module.exports = userRouter;