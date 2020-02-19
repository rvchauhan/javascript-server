import UserController from './Controller'
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
import { userModel } from '../../../src/repositories/user/UserModel'
const UserRouter = Router();
UserRouter.route('/user')
  .get(authmiddleware('getUsers', 'read'), validationHandler(validation.get), UserController.list)
  .post(authmiddleware('getUsers', 'read'), validationHandler(validation.create), UserController.create)
  .put(authmiddleware('getUsers', 'read'), validationHandler(validation.update), UserController.update)
UserRouter.delete('/user/:id', authmiddleware('getUsers', 'write'), validationHandler(validation.delete), UserController.delete);
UserRouter.route('/me')
  .get(authmiddleware('getUsers', 'read'), UserController.me)
UserRouter.route('/login')
  .post(validationHandler(validation.login), UserController.login);
export default UserRouter;

  