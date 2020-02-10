import { server } from "typescript";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NewRequest } from '../extraTs/interfaces'
import notFoundRoutes from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
import mainRouter from './router';
import { config } from 'dotenv';
import Database from '../src/libs/Database'

class Server {
  private app: express.Application;
  constructor(private config) {
    this.app = express();
  }
  bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  run = (): void => {
    const { app, config: { port, mongoDBUri } } = this;
    Database.open(mongoDBUri).then(() => {
      this.app.listen(this.config.port, (err) => {
        if (err) {
          console.log('error');
          throw err;
        }
        console.log('App is running successfully on port ' + port);
      });
    })
  };
  initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
  }
  setupRoutes = () => {
    const { app } = this;
    app.use('/health-check', (req, res) => {
      console.log(' Inside health check ');
      res.send(' I am OK ');
    });
    app.use('/bodyparser', (req: NewRequest, res, next) => {
      console.log(" inside Middleware ");
      req.user = {
        id: ' 1 ',
        name: ' Node '
      }
      res.send('OK')
    });
    app.use('/api', mainRouter);
    app.use(notFoundRoutes);
    app.use(errorHandler);
    return this;
  }
}
export default Server;