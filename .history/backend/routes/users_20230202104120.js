const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
// const{cookieExtractor } = require ('../middlewares/passport_middleware.js')
const userRouter = express.Router();

userRouter.get('/', \ getUsers);
userRouter.get('/:id',cookieExtractor  , getUserById);

module.exports = userRouter;