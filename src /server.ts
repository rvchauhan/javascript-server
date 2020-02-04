import { server } from "typescript";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request } from 'express';
import notFoundRoutes from './libs/routes/notFoundRoute'
import errorHandler from './libs/routes/errorHandler'
import Iconfig from "./config/IConfig";
interface User {
    id: string;
    name: string;
}
interface NewRequest extends Request {
    user: User;
}
class Server {
    private app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap = () => {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    run = () => {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log(`App is running successfuly on port ${port}`);
        })
    }
    initBodyParser = () => {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
    }
    setupRoutes = () => {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            console.log('Inside health check');
            res.send('I am OK');
        });
        app.use('/api', (req: NewRequest, res, next) => {
            console.log("inside Middleware");
            req.user = {
                id: '1',
                name: 'Node'
            }
            res.send('OK')
        })
        app.use(notFoundRoutes);
        app.use(errorHandler);
        return this;
    }
}
export default Server;
