const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
const { validationMiddleware } = require('../middlewares/validations_middleware.js');
const {cookieExtractor} = require('../middlewares/passport_middleware.js')

const userRouter = express.Router();

userRouter.post('/', cookieExtractor, validationMiddleware, getUsers);
userRouter.post('/:id', checkAuthentication, validationMiddleware, getUserById);

module.exports = userRouter;