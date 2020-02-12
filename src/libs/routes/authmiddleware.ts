import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from './../../config/configuration'
<<<<<<< HEAD
import hasPermission  from './permission'
import { IgetUsers } from '../../../extraTs/interfaces'
=======
import hasPermissions from './permission'
import permissions from './constant'
>>>>>>> d58c8679970be40728e17ed2db56efd06dd1ed6e

export default (module, permissiontype) => (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("------------INSIDEAUTHMIDDLEWARE------------", module, permissiontype);
    const token: string = req.headers[`authorization`]
    const decodeUser = jwt.verify(token, config.secretKey);
    console.log(">>>>>>", permissiontype)

<<<<<<< HEAD
    const decodeUser = jwt.verify(token, secretKey);
    console.log(decodeUser)
=======
   console.log("==========", decodeUser)
    
>>>>>>> d58c8679970be40728e17ed2db56efd06dd1ed6e
    if (!decodeUser) {
      next({
        status: 404,
        error: "Unauthorized Access",
        message: "Unauthorized "
      });
    }
<<<<<<< HEAD
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
  catch(error) {
    next({
=======

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

>>>>>>> d58c8679970be40728e17ed2db56efd06dd1ed6e
      status: 403,
        error: "Unauthorized Access",
        message: "Unauthorized Access"
  });
}
}