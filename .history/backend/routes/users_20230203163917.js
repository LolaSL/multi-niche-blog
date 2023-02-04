import express from 'express';

const userRouter = express.Router();

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', getUserById)
userRouter.delete('/users/:id', deleteUser)