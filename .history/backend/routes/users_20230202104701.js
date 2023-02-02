const express = require('express');
const { getUsers, getUserById } = require('../controllers/user.js');
// const{checkAuthentication } = require ('../middlewares/passport_middleware.js')
const userRouter = express.Router();

userRouter.get('/', (re) getUsers);
userRouter.get('/:id', getUserById);

module.exports = userRouter;