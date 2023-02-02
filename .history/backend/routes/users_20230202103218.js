const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
const{checkAuthentication } = require ('../')
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;