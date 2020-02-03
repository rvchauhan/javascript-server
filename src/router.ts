import { traineeRouter } from './controllers/trainee/index';
import { Router } from 'express';
const mainRouter = Router();
mainRouter.use('/', traineeRouter);
export default mainRouter;