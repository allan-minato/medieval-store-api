import jwt from 'jsonwebtoken';

const secret = 'xablau';

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10m',
};

const createToken = (payload: object): string =>
  jwt.sign({ data: payload }, secret, JWT_CONFIG);

export default {
  createToken,
};