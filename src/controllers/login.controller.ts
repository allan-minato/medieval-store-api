import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt.util';
import loginService from '../services/login.service';

async function userLogin(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  const userInfo = await loginService.userLogin(username);
  // console.log('WWWWWWWWWWWWWWW', userInfo?.dataValues.username);

  if (!userInfo) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
    
  const criptPassword: boolean = await bcrypt.compare(password, userInfo.dataValues.password);

  if (!criptPassword) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = jwt.createToken({
    id: userInfo.dataValues.id, username: userInfo.dataValues.username });

  return res.status(200).json({ token });
}

export default {
  userLogin,
};