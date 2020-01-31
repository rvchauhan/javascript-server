import {traineeRouter} from './controllers/user/trainee/index';
import {Router} from 'express';
const mainRouter = Router();
mainRouter.use('/',traineeRouter);
export default mainRouter;