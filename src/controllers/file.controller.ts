import Controller from "./controller";
import express from 'express'

import * as config from './../config'
import * as grpc from "grpc";
import { FileServiceClient } from "./../../proto/generated/files_grpc_pb";
import { File, ReadReq} from "./../../proto/generated/files_pb";
import FileControllerProto from "./file.controller.proto";

export default class FileController extends Controller {
    
    public path: string = "/file";
    
    constructor() {
        super();
    }

    public create(req: express.Request, res: express.Response) {
        const file: any = req.body.file;
        const proto: FileControllerProto = new FileControllerProto();
        proto.create(file)
        .then((file) => {
            res.send(file)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }
    
    public read(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        const owner: string = req.body.owner;

        const proto: FileControllerProto = new FileControllerProto();
        proto.read(id, owner)
        .then((file) => {
            res.send(file)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }

    public update(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }

    public delete(req: express.Request, res: express.Response) {
        const id: string = req.params.id;
        const owner: string = req.body.owner;
        const proto: FileControllerProto = new FileControllerProto();
        proto.delete(id, owner)
        .then((success) => {
            res.send(success)
        })
        .catch((err) => {
            res.status(400).send(err)
        })
    }
    public all(req: express.Request, res: express.Response) {
        throw new Error("Method not implemented.");
    }
}