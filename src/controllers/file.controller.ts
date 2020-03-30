import Controller from "./controller";
import express from 'express'

export default class FileController extends Controller {

    public path: string = "/file";

    public create(req: express.Request, res: express.Response) {
        const file: any = req.body;
    }
    public read(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
    public update(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
    public delete(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
    public all(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
}