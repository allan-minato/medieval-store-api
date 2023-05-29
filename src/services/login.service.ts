import UserModel, { UserSequelizeModel } from '../database/models/user.model';

async function userLogin(username: string): Promise<UserSequelizeModel | null> {
  const user = (await UserModel.findOne({ where: { username } }));
  console.log('wwwwwwwwwwwwwWWWWW:', user);

  return user;
}

export default { userLogin };