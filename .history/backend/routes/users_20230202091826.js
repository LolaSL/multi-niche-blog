import express from 'express';
const { register, login, logout, } = require('../controllers/auth.js');
const { validationMiddleware } = require('../middlewares/validations_middleware');


const userRouter = express.Router();