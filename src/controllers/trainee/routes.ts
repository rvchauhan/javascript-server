import { TraineeController } from './index';
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
import authmiddleware from './../../libs/routes/authmiddleware'
const traineeRouter = Router();
//console.log(validation.create);
traineeRouter.route('/trainee')
  .get(authmiddleware('getUsers', 'read'), validationHandler(validation.get), TraineeController.create)
  .post(authmiddleware('getUsers', 'write'), validationHandler(validation.create), TraineeController.list)
  .put( authmiddleware('getUsers', 'write'),validationHandler(validation.update), TraineeController.put)
traineeRouter.delete('/trainee/:id', authmiddleware('getUsers', 'write'),validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;

