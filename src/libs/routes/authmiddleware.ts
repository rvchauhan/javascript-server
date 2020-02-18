import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
import hasPermissions from './permission'
import permissions from './constant'
import userRepository from '../../repositories/user/UserRepository'
import IRequest from './IRequest'
export default (module, permissiontype) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const UserRepository = new userRepository
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissiontype);
    const token: string = req.headers[`authorization`]
    const decodeUser = jwt.verify(token, config.secretKey);
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauthorized Access",
        message: "Unauthorized "
      });
    }
    UserRepository.findone({ 'email': decodeUser['email'] }).then(user => {
      if (['read', 'write', 'delete'].includes(permissiontype) && decodeUser['role'] == 'head-trainer') {
        req.user = user;
        console.log("------------", req.user)
        next();
      }
      else {
        if (!hasPermissions(module, decodeUser['role'], permissiontype)) {
          next({
            status: 403,
            error: "Unauthorized Access",
            message: "Unauthorized Access"
          });
        }
        req.user = user;
        next();
      }
    })
  }
  catch (error) {
    next({

      status: 403,
      error: "Unauthorized Access",
      message: "Unauthorized Access"
    });
  }
};