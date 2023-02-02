const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
const { validationMiddleware} = require('../middlewares/validations_middleware')
const userRouter = express.Router();

userRouter.get('/',validationMiddleware, getUsers);
userRouter.get('/:id', validationMiddleware, getUserById);

module.exports = userRoute 