import TraineeController from './Controller';
import { Router } from 'express';
const traineeRouter = Router();
traineeRouter.route('/trainee')
  .get(TraineeController.create)
  .post(TraineeController.list)
  .put(TraineeController.put)
  .delete(TraineeController.delete);
export default traineeRouter;

