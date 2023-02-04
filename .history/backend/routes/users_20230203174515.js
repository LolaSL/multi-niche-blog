const express = require('express');
const {getUsers, getUserById, createUser, deleteUser } = require('../controllers/user.js');

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;