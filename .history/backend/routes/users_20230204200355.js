const express = require('express');
const {getUsers, getUserById, deleteUser } = require('../controllers/user.js');

const userRouter = express.Router();
userRouter.get('/users', getUsers);
// userRouter.post('/users', createUser);
userRouter.get('/user/:id', getUserById);
userRouter.delete('/user/:id', deleteUser);

module.exports = userRouter;