import {  TraineeController} from './index';
import { Router } from 'express';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'
const traineeRouter = Router();
//console.log(validation.create);
traineeRouter.route('/trainee')
  .get(validationHandler(validation.get),TraineeController.create)
  .post(validationHandler(validation.create),TraineeController.list)
  .put(validationHandler(validation.update),TraineeController.put)
 
  traineeRouter.delete('/trainee/:id', validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;

