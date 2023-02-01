const express =require('express');

const { register, login, logout, } = require('../controllers/auth.js');
const {
    validationMiddleware,
  } = require('../middlewares/validations_middleware')
  const { registerValidation, loginValidation } = require('../validators/auth.js')
  const { userAuth } = require('../middlewares/auth_middleware.js')
const authRouter = express.Router();

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

module.exports = authRouter;