import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateLogin from '../database/middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/login', validateLogin, loginController.userLogin);

export default loginRouter;