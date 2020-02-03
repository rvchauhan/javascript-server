import * as express from 'express';
import Iconfig from './config/IConfig';
class Server {
    private app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap = () => {
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
    setupRoutes = () => {

        const { app } = this;
        app.use('/health-check', (req, res) => {
            console.log('Inside health check');
            res.send('I am OK');
        });

        return this;
    }
}
export default Server;