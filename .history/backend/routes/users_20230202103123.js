const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
co
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;