import { traineeRouter } from './controllers/index';
import { Router } from 'express';
const mainRouter = Router();
mainRouter.use('/', traineeRouter);
export default mainRouter;