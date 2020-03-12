import TraineeController from './Controller'
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
import { userModel } from '../../../src/repositories/user/UserModel'
import UserController from './Controller'
const UserRouter = Router();
//UserRouter.route('/user')
/**
* @swagger
*
* definitions:
*     Login:
*        type: object
*        properties:
*          email:
*            type: string
*            example: chauhanravi814@gmail.com
*          password:
*            type: string
*            example: ravi@1998
*     Token:
*        type: object
*        properties:
*           status:
*            example: Ok
*           message:
*            example: Success
*           data:
*            example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmF5LmNoYXVkaGFyeUBzdWNjZXNzaXZlLnRlY2giLCJfaWQiOiI1ZTQ1NDA0Mzk4ZTg2ZDU3NmFkOTY0ZTYiLCJpYXQiOjE1ODIxOTY2MjUsImV4cCI6MTU4MjE5NzUyNX0.sLT3-1NmeyJtS0eDjhO3SUDiVSgaizfX0R7sqPgG040
*/

/**
* @swagger
*
* /api/user/me:
*     get:
*       description: Details of the current user.
*       security:
*         - Bearer: []
*       produces:
*         - application/json
*       responses:
*         200:
*           description: success
*           schema:
*             $ref: '#/definitions/TraineeResponse'
*/
UserRouter.route('/me')
  .get(authmiddleware('getUsers', 'read'), UserController.me)
/**
* @swagger
*
* /api/user/login:
*     post:
*       description: Login Credentials
*       security:
*         - Bearer: []
*       produces:
*         - application/json
*       parameters:
*         - name: User
*           description: User email and password
*           in: body
*           required: true
*           type: object
*           schema:
*             $ref: '#/definitions/Login'
*       responses:
*         200:
*           description: login
*           schema:
*             $ref: '#/definitions/Token'
*         422:
*           description: invalid email or password
*           schema:
*             oneOf:
*             properties:
*               status:
*                   example: "Bad Request"
*               message:
*                   example: Password does not match
*               err:
*                   example: Password is incorrect
*/
UserRouter.route('/login')
  .post(validationHandler(validation.login), UserController.login);
export default UserRouter;
