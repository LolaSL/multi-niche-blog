const express = require('express');
const {getUsers, creategetUserById, deleteUser } = require('../controllers/user.js');

const userRouter = express.Router();
userRouter.get('/users', getUsers);
userRouter.get('/users', getUsers);
userRouter.get('/user/:id', getUserById);
userRouter.delete('/user/:id', deleteUser);

module.exports = userRouter;