import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
import { hasPermissions } from './permission'
import permissions from './constant'

export default (module, permissionytype) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissionytype);
    const token: string = req.headers[`authorization`]
    const { secretKey } = config;

    const decodeUser = jwt.verify(token, secretKey);
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauthorized Access",
        message: "Unauthorized "
      });
    }
    console.log("==========",decodeUser['role'])
    console.log(">>>>>>",permissionytype)
    if ('read'||'write'||'delete'.includes(permissionytype) && decodeUser['role'] == 'head-trainer') {
      next();
    }
    else {
    if (!hasPermissions(module, decodeUser['role'], permissionytype)) {
      next({
        status: 403,
        error: "Unauthorized Access",
        message: "Unauthorized Access"
      });
    }
    next();
  }
}
  catch (error) {
    next({
      
      status: 403,
      error: "Unauthorized Access",
      message: "Unauthorized Access"
    });
  }
}