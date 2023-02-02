import express from 'express';
const { getUsers } = require('../controllers/user.js');
const { validationMiddleware } = require('../middlewares/validations_middleware');


const userRouter = express.Router();

authRouter.post('/all', registerValidation, validationMiddleware, register)
authRouter.post('/login',  loginValidation, validationMiddleware, login)