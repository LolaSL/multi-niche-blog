const express = require('express');
const {getUsers, getUserById, deleteUser, } = require('../controllers/user.js');
const userRouter = express.Router();

userRouter.get('/', getUsers)
userRouter.get('/users/:id', getUserById)
userRouter.delete('/users/:id', deleteUser)