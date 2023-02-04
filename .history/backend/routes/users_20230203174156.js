const express = require('express');
const {getUsers, getUserById, deleteUser, } = require('../controllers/user.js');

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;