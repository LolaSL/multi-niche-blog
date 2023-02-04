import express from 'express';

const userRouter = express.Router();

userRouter.get('/users', db.getUsers)
userRouter.get('/users/:id', db.getUserById)
app.delete('/users/:id', db.deleteUser)