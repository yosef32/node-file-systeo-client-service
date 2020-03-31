import grpc from "grpc";
import * as config from './../config'

import { FileServiceClient } from "./../../proto/generated/files_grpc_pb";
import { File, ReadReq, FileRes, DeleteReq, DeleteRes, CreateReq } from "./../../proto/generated/files_pb";

export default class FileControllerProto {

    private client: FileServiceClient;

    constructor() {
        this.client = new FileServiceClient(config.server_url, grpc.credentials.createInsecure());
    }

    public create(data: any) {
        return new Promise((resolve, reject) => {
            const createReq = new CreateReq();

            const file = new File();
            file.setOwner(data.owner)
            file.setPath(data.path)
            file.setName(data.name)
            file.setIsfolder(data.isFolder)

            console.log(file)

            createReq.setFile(file)

            this.client.create(createReq, (err, file: FileRes) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve(file.getFile());
            });
        });
    }

    public read(id: string, owner: string) {
        return new Promise((resolve, reject) => {
            const readReq = new ReadReq();
            readReq.setId(id)
            readReq.setOwner(owner)

            this.client.read(readReq, (err, file: FileRes) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve(file.getFile());
            });
        });
    }

    public delete(id: string, owner: string) {
        return new Promise((resolve, reject) => {
            const deleteReq = new DeleteReq();
            deleteReq.setId(id)
            deleteReq.setOwner(owner)

            this.client.delete(deleteReq, (err, success: DeleteRes) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve(success);
            });
        });
    }

}