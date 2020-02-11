import { traineeRouter } from './controllers/index';
import  UserRouter  from './controllers/user/routes';
import { Router } from 'express';
const mainRouter = Router();
mainRouter.use('/', traineeRouter);
mainRouter.use('/', UserRouter);
export default mainRouter;