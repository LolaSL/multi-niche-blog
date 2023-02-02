const express;
const { getUsers, getUserById } = require('../controllers/user.js');
const { validationMiddleware } = require('../middlewares/validations_middleware.js');
const {checkAuthentication} = require('../middlewares/passport_middleware.js')

const userRouter = express.Router();

authRouter.post('/all', checkAuthentication, validationMiddleware, getUsers);
authRouter.post('/:id', checkAuthentication, validationMiddleware, getUserById);

module.exports = userRouter;