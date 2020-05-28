import { server } from "typescript";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NewRequest } from '../extraTs/interfaces'
import notFoundRoutes from './libs/routes/notFoundRoute';
import errorHandler from './libs/routes/errorHandler';
import mainRouter from './router';
import { config } from 'dotenv';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerJsDoc from 'swagger-jsdoc';

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
  public initSwagger = () => {
    const options = {
      definition: {
        info: {
          title: 'Javascript-Server API',
          version: '1.0.0',
        },
        securityDefinitions: {
          Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'headers'
          }
        }
      },
      basePath: '/api',
      swagger: '2.0',
      apis: ['./dist/src/controllers/**/routes.js'],
    };
    const swaggerSpec = swaggerJsDoc(options);
    return swaggerSpec;
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
      .catch((err) => {
        console.log("Mongo is not connected")
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
    this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()))
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