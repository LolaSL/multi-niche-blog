import express from 'express';
const { getUsers, getUserById } = require('../controllers/user.js');
const { validationMiddleware } = require('../middlewares/validations_middleware');
const {checkAuthentication} = require('../middlewares/pad')

const userRouter = express.Router();

authRouter.post('/all', registerValidation, validationMiddleware, getUsers)
authRouter.post('/:id',  loginValidation, validationMiddleware, getUserById)