import grpc from "grpc";
import * as config from './../config'

import { FileServiceClient } from "./../../proto/generated/files_grpc_pb";
import { File, ReadReq, FileRes, DeleteReq, DeleteRes, CreateReq, UpdateReq } from "./../../proto/generated/files_pb";

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

            createReq.setFile(file)

            this.client.create(createReq, (err, file: any) => {
                if (err != null) {
                    console.log("reject", err)
                    reject(err); return;
                }
                resolve({
                    "file": {
                        "id": file.getFile().array[0],
                        "owner": file.getFile().array[1],
                        "path": file.getFile().array[2],
                        "name": file.getFile().array[3],
                        "isFolder": file.getFile().array[4]
                    }
                });
            });
        });
    }

    public read(id: string, owner: string) {
        return new Promise((resolve, reject) => {
            const readReq = new ReadReq();
            readReq.setId(id)
            readReq.setOwner(owner)

            this.client.read(readReq, (err, file: any) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve({
                    "file": {
                        "id": file.getFile().array[0],
                        "owner": file.getFile().array[1],
                        "path": file.getFile().array[2],
                        "name": file.getFile().array[3],
                        "isFolder": file.getFile().array[4]
                    }
                });
            });
        });
    }

    public update(data: any) {
        return new Promise((resolve, reject) => {
            const updateReq = new UpdateReq();
            
            const file = new File();
            file.setId(data.id)
            file.setOwner(data.owner)
            file.setPath(data.path)
            file.setName(data.name)
            file.setIsfolder(data.isFolder)
            updateReq.setFile(file)

            this.client.update(updateReq, (err, file: any) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve({
                    "file": {
                        "id": file.getFile().array[0],
                        "owner": file.getFile().array[1],
                        "path": file.getFile().array[2],
                        "name": file.getFile().array[3],
                        "isFolder": file.getFile().array[4]
                    }
                });
            });
        });
    }

    public delete(id: string, owner: string) {
        return new Promise((resolve, reject) => {
            const deleteReq = new DeleteReq();
            deleteReq.setId(id)
            deleteReq.setOwner(owner)

            this.client.delete(deleteReq, (err, success: any) => {
                if (err != null) {
                    reject(err); return;
                }
                resolve({
                    "success": success.array[0]
                });
            });
        });
    }

}