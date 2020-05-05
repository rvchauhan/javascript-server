import TraineeController from './Controller'
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
import { userModel } from '../../../src/repositories/user/UserModel'
const UserRouter = Router();
// UserRouter.route('/user')
//   .get(authmiddleware('getUsers', 'read'), validationHandler(validation.get), TraineeController.list)
//   .post(authmiddleware('getUsers', 'read'), validationHandler(validation.create), TraineeController.create)
//   .put(authmiddleware('getUsers', 'read'), validationHandler(validation.update), TraineeController.update)
// UserRouter.delete('/user/:id', authmiddleware('getUsers', 'write'), validationHandler(validation.delete), TraineeController.delete);
UserRouter.route('/me')
  .get(authmiddleware('getUsers', 'read'), TraineeController.me)
UserRouter.route('/login')
  .post(validationHandler(validation.login), TraineeController.login);
export default UserRouter;