import UserController  from './Controller'
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
const UserRouter = Router();
UserRouter.route('/user')
  .get(authmiddleware('getUsers', 'read'), validationHandler(validation.get), UserController.list)
  .post(authmiddleware('getUsers', 'read'), validationHandler(validation.create), UserController.create)
  .put(authmiddleware('getUsers', 'read'), validationHandler(validation.update), UserController.update)
UserRouter.delete('/user/:id', authmiddleware('getUsers', 'write'), validationHandler(validation.delete), UserController.delete);

export default UserRouter;

