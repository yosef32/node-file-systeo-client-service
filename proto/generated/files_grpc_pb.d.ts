// package: files
// file: files.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as files_pb from "./files_pb";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileServiceService_ICreate;
    read: IFileServiceService_IRead;
    update: IFileServiceService_IUpdate;
    delete: IFileServiceService_IDelete;
    listFiles: IFileServiceService_IListFiles;
}

interface IFileServiceService_ICreate extends grpc.MethodDefinition<files_pb.CreateReq, files_pb.FileRes> {
    path: string; // "/files.FileService/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<files_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<files_pb.CreateReq>;
    responseSerialize: grpc.serialize<files_pb.FileRes>;
    responseDeserialize: grpc.deserialize<files_pb.FileRes>;
}
interface IFileServiceService_IRead extends grpc.MethodDefinition<files_pb.ReadReq, files_pb.FileRes> {
    path: string; // "/files.FileService/Read"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<files_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<files_pb.ReadReq>;
    responseSerialize: grpc.serialize<files_pb.FileRes>;
    responseDeserialize: grpc.deserialize<files_pb.FileRes>;
}
interface IFileServiceService_IUpdate extends grpc.MethodDefinition<files_pb.UpdateReq, files_pb.FileRes> {
    path: string; // "/files.FileService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<files_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<files_pb.UpdateReq>;
    responseSerialize: grpc.serialize<files_pb.FileRes>;
    responseDeserialize: grpc.deserialize<files_pb.FileRes>;
}
interface IFileServiceService_IDelete extends grpc.MethodDefinition<files_pb.DeleteReq, files_pb.DeleteRes> {
    path: string; // "/files.FileService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<files_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<files_pb.DeleteReq>;
    responseSerialize: grpc.serialize<files_pb.DeleteRes>;
    responseDeserialize: grpc.deserialize<files_pb.DeleteRes>;
}
interface IFileServiceService_IListFiles extends grpc.MethodDefinition<files_pb.ListFilesReq, files_pb.ListFilesRes> {
    path: string; // "/files.FileService/ListFiles"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<files_pb.ListFilesReq>;
    requestDeserialize: grpc.deserialize<files_pb.ListFilesReq>;
    responseSerialize: grpc.serialize<files_pb.ListFilesRes>;
    responseDeserialize: grpc.deserialize<files_pb.ListFilesRes>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<files_pb.CreateReq, files_pb.FileRes>;
    read: grpc.handleUnaryCall<files_pb.ReadReq, files_pb.FileRes>;
    update: grpc.handleUnaryCall<files_pb.UpdateReq, files_pb.FileRes>;
    delete: grpc.handleUnaryCall<files_pb.DeleteReq, files_pb.DeleteRes>;
    listFiles: grpc.handleUnaryCall<files_pb.ListFilesReq, files_pb.ListFilesRes>;
}

export interface IFileServiceClient {
    create(request: files_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    create(request: files_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    create(request: files_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: files_pb.ReadReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: files_pb.ReadReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: files_pb.ReadReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: files_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: files_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: files_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    delete(request: files_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    delete(request: files_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    delete(request: files_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    listFiles(request: files_pb.ListFilesReq, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    listFiles(request: files_pb.ListFilesReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    listFiles(request: files_pb.ListFilesReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: files_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public create(request: files_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public create(request: files_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: files_pb.ReadReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: files_pb.ReadReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: files_pb.ReadReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: files_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: files_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: files_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.FileRes) => void): grpc.ClientUnaryCall;
    public delete(request: files_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    public delete(request: files_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    public delete(request: files_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.DeleteRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: files_pb.ListFilesReq, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: files_pb.ListFilesReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: files_pb.ListFilesReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: files_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
}
