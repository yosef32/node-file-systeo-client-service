import Controller from "./controller";
import express from 'express'
import FileControllerProto from "./file.controller.proto";

export default class FileController extends Controller {
    
    public path: string = "/file";
    private proto: FileControllerProto = new FileControllerProto();
    
    constructor() {
        super();
    }

    public create(req: express.Request, res: express.Response) {
        const file: any = req.body.file;
        
        this.proto.create(file)
        .then((file) => {
            res.send(file)
        })
        .catch((err) => {
            res.status(this.statusCodes.getHttpStatusCode(res.statusCode)).send(err)
        })
    }
    
    public read(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        const owner: string = req.body.owner;

        this.proto.read(id, owner)
        .then((file) => {
            res.send(file)
        })
        .catch((err) => {
            res.status(this.statusCodes.getHttpStatusCode(res.statusCode)).send(err)
        })
    }

    public update(req: express.Request, res: express.Response) {
        const file: any = req.body.file;

        this.proto.update(file)
        .then((file) => {
            res.send(file)
        })
        .catch((err) => {
            res.status(this.statusCodes.getHttpStatusCode(res.statusCode)).send(err)
        })
    }

    public delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        const owner: string = req.body.owner;
        
        this.proto.delete(id, owner)
        .then((success) => {
            res.send(success)
        })
        .catch((err) => {
            res.status(this.statusCodes.getHttpStatusCode(res.statusCode)).send(err)
        })
    }
    public all(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
}