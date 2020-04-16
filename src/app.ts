import * as config from './config'
import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controllers/controller';

export default class App {

    public app: express.Application;

    constructor(controllers: Array<Controller>) {
        this.app = express();
        this.initMiddlewares()
        this.initControllers(controllers);
    }

    private initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');

            if (req.method === 'OPTIONS') {
                return res.status(200).end();
            }
            return next();
        });
    }

    private initControllers(controllers: Array<Controller>) {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router)
        });
    }

    public async connectGrpc(m: number): Promise<App> {
        await new Promise(func => setTimeout(func, m));
        console.log(`Grpc listening on the port ${config.server_port}`);
        return this;
    }

    public async listen() {
        this.app.listen(config.using_port, () => {
            console.log(`App listening on the port ${config.using_port}`);
        });
    }
}