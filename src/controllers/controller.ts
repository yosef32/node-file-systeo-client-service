import express from 'express'
import StatusCode from '../handlers/StatusCode';

export default abstract class Controller {

    public abstract path: string;
    public router: express.Router = express.Router();
    public statusCodes: StatusCode = new StatusCode();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post('/', this.create.bind(this));
        this.router.get('/:id', this.read.bind(this));
        this.router.put('/:id', this.update.bind(this));
        this.router.delete('/:id', this.delete.bind(this));
        this.router.get('/', this.all.bind(this));
    }

    public abstract create(req: express.Request, res: express.Response): any;

    public abstract read(req: express.Request, res: express.Response): any;

    public abstract update(req: express.Request, res: express.Response): any;

    public abstract delete(req: express.Request, res: express.Response): any;

    public abstract all(req: express.Request, res: express.Response): any;

}