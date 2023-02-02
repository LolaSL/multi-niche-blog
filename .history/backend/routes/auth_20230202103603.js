const express =require('express');
const{checkAuthentication } = require ('../middlewares/passport_middleware.js')
const { register, login, logout } = require('../controllers/auth.js');
const { validationMiddleware} = require('../middlewares/validations_middleware')
  const { registerValidation, loginValidation } = require('../validations/auth.js')
  
const authRouter = express.Router();

authRouter.post('/register', registerValidation, validationMiddleware, register)
authRouter.post('/login',  loginValidation, validationMiddleware, checkAuthentication login)
authRouter.post('/logout', logout)

module.exports = authRouter;