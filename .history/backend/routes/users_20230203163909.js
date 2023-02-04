import express from 'express';

const userRouter = express.Router();

userRouter.get('/users', getUsers)
userRouter.get('/users/:id', db.getUserById)
userRouter.delete('/users/:id', db.deleteUser)