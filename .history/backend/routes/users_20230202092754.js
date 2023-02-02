import express from 'express';
const { getUsers, getUserById } = require('../controllers/user.js');
const { validationMiddleware } = require('../middlewares/validations_middleware.js');
const {checkAuthentication} = require('../middlewares/passport_middleware')

const userRouter = express.Router();

authRouter.post('/all', registerValidation, validationMiddleware, getUsers)
authRouter.post('/:id',  loginValidation, validationMiddleware, getUserById)