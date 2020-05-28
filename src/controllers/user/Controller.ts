import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse'
import IRequest from '../../libs/routes/IRequest'
import config from '../../config/configuration'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import Iusercreate from './../../repositories/entities/Iusercreate'
import seedData from '../../libs/seedData'
import { JsonWebTokenError } from 'jsonwebtoken';
class UserController {
  static instance: UserController;
  static userRepository: UserRepository;
  userRepository = new UserRepository();
  static getInstance = () => {
    if (UserController.instance) {
      return UserController.instance;
    }
    UserController.instance = new UserController();
    return UserController.instance;
  }

  me = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(":::::::::::::::INSIDE ME::::::::::::::");
      console.log("req", req.user)
      return await SystemResponse.success(res, req.user, "your data")
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  }

  login = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log("::::::::::::INSIDE LOG IN::::::::::::");
      const { email, password } = req.body;
      console.log("baby", email, password);
      const user = await this.userRepository.findone({ email, deletedAt: undefined });
      console.log("asas", user);
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = await jwt.sign({ id: user._id, email: user.email, role: user.role, exp: Math.floor(Date.now() / 1000) + 15 * 60 }, config.secretKey)
        if (!token) {
          console.log("token is not generated")
        } else {
          return SystemResponse.success(res, token, "token generated")
        }
        return SystemResponse.success(res, req.user, " Logged in");
      } else {
        console.log("not a User")
      }
    }
    catch (err) {
      throw err;
    }
  }
}
export default UserController.getInstance();
