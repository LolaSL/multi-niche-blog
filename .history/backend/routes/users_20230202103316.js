const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
const{checkAuthentication } = require ('../middlewares/passport_middleware.js')
const userRouter = express.Router();

userRouter.get('/',  getUsers);
userRouter.get('/:id',checkAuthentication , getUserById);

module.exports = userRouter;