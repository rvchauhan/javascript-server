import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
import hasPermissions from './permission'
import permissions from './constant'
import userRepository from '../../repositories/user/UserRepository'
import IRequest from './IRequest'
export default (module, permissiontype) => async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const UserRepository = new userRepository
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissiontype);
    const token: string = req.headers[`authorization`]
    const decodeUser = jwt.verify(token, config.secretKey);
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauhorized Access",
        message: "Unauthorized "
      });
    }
<<<<<<< HEAD
    UserRepository.findone({ 'email': decodeUser['email'], '_id': decodeUser['id'],deletedAt: undefined  }).then(user => {
      if (user == null) {
        next({
          error: "Unauthorized Access",
          message: "User doesn't exist"
        })
=======
    const user = await UserRepository.findone({ 'email': decodeUser['email'], '_id': decodeUser['id'] })
    if (user == null) {
      next({
        error: "Unauthorized Access",
        message: "User doesn't exist"
      })
    } else {
      if (['read', 'write', 'delete'].includes(permissiontype) && decodeUser['role'] == 'head-trainer') {
        req.user = user;
        next();
>>>>>>> 5c3c3c93bac60a71fd9f0f7234a2ec7cfb059572
      } else {
        if (!hasPermissions(module, decodeUser['role'], permissiontype)) {
          next({
            status: 403,
            error: "Unauthorized Access",
            message: "Unauthorized Access"
          });
        }
        next();
      }
    }
  }
  catch (error) {
    next({

      status: 403,
      error: "Unauthorized Access",
      message: "Unauthorized Access"
    });
  }
};