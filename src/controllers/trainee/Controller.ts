import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse'
import * as bcrypt from 'bcrypt'
import Iusercreate from './../../repositories/entities/Iusercreate'
class TraineeController {
  static instance: TraineeController;
  static userRepository: UserRepository;
  userRepository = new UserRepository();
  static getInstance = () => {
    if (TraineeController.instance) {
      return TraineeController.instance;
    }
    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
  }

  async encodedPassword(password: string) {
    const pass = await bcrypt.hash(password, 10);
    console.log("pass", pass)
    return pass;
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('-----------------CREATE TRAINEE USER----------------:');
      const users: Iusercreate = req.body;
      const password = users.password;
      async function encodedPassword(password) {
        return await bcrypt.hash(password, 10)
      }
      const pass = await encodedPassword(password);
      await Object.assign(users, { password: pass });
      const user = await this.userRepository.create(users)
      return SystemResponse.success(res, user, 'trainee added sucessfully');
    } catch (err) {
      return next({ error: err, message: err });
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('-------------INSIDE LIST TRAINEE----------- ');
      const { skip, limit, sortBy, searchBy } = req.query;
      const countResult = await this.userRepository.count();
      const search = await searchBy ? searchBy.toLowerCase() : "";
      if (search) {
        let user = await this.userRepository.list(skip, limit, sortBy, { $or: [{ name: { $regex: search } }, { email: { $regex: search } } ]});
        user['count'] = countResult;
        return SystemResponse.success(res, user, 'Users List');
      }
      else {
        const user = await this.userRepository.list(Number(skip), Number(limit), sortBy, searchBy)
        user['count'] = countResult;
        return SystemResponse.success(res, user, 'Users List');
      }
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('------------INSIDE UPDATE TRAINEE-------------');
      const { id, dataToUpdate } = req.body;
      const user = await this.userRepository.update(id, dataToUpdate)
      return SystemResponse.success(res, user, 'Updated user');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Delete Trainee :::::::: ');
      const { id } = req.params;
      const user = await this.userRepository.delete({ id: id })
      return SystemResponse.success(res, user, 'User Deleted Successfully')
    } catch (err) {
      throw err;
    }
  };
}

export default TraineeController.getInstance();
