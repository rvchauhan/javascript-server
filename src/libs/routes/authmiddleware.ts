import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
import hasPermission from './permission'
import { IgetUsers } from '../../../extraTs/interfaces'

export default (module, permissionytype) => async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers[`authorization`]
  const { secretKey } = config;
  try {
    const decodeUser = await jwt.verify(token, secretKey);
    console.log(decodeUser);
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissionytype);
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauthorized Access",
        message: "Unauthorized "
      });
    }
    console.log(decodeUser['role'])
    if (!hasPermission(module, decodeUser['role'], permissionytype)) {

      next({
        status: 403,
        error: "Unauthorized Access",
        message: "Unauthorized Access"
      });
    }
    next();
  }
  catch (error) {
    next({
      status: 403,
      error: "Unauthorized Access",
      message: "Unauthorized Access"
    });
  }
}