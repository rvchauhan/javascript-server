import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
import hasPermissions from './permission'
import permissions from './constant'

export default (module, permissiontype) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissiontype);
    const token: string = req.headers[`authorization`]
    const decodeUser = jwt.verify(token, config.secretKey);
    console.log(">>>>>>", permissiontype)

   console.log("==========", decodeUser)
    
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauthorized Access",
        message: "Unauthorized "
      });
    }

    if ('read' || 'write' || 'delete'.includes(permissiontype) && decodeUser['role'] == 'head-trainer') {
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
      next();
    }
  }
  catch (error) {
    console.log("!!!!!!!!!!!")
    next({

      status: 403,
      error: "Unauthorized Access",
      message: "Unauthorized Access"
    });
  }
}