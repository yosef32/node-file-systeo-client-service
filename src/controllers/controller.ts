import express from 'express'

export default abstract class Controller {

    public abstract path: string;
    public router: express.Router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post('/', this.create);
        this.router.get('/:id', this.read);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
        this.router.get('/', this.all);
    }

    public abstract create(req: express.Request, res: express.Response): any;

    public abstract read(req: express.Request, res: express.Response): any;

    public abstract update(req: express.Request, res: express.Response): any;

    public abstract delete(req: express.Request, res: express.Response): any;

    public abstract all(req: express.Request, res: express.Response): any;



}