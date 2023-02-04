const express = require('express');
const {getUsersgetUserById,
    deleteUser, } = require('../controllers/auth.js');
const userRouter = express.Router();

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getUserById)
userRouter.delete('/users/:id', deleteUser)