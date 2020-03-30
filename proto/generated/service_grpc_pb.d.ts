// package: proto
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";

interface IAddServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAddServiceService_ICreate;
    read: IAddServiceService_IRead;
    update: IAddServiceService_IUpdate;
    delete: IAddServiceService_IDelete;
    listFiles: IAddServiceService_IListFiles;
}

interface IAddServiceService_ICreate extends grpc.MethodDefinition<service_pb.CreateReq, service_pb.FileRes> {
    path: string; // "/proto.AddService/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.CreateReq>;
    requestDeserialize: grpc.deserialize<service_pb.CreateReq>;
    responseSerialize: grpc.serialize<service_pb.FileRes>;
    responseDeserialize: grpc.deserialize<service_pb.FileRes>;
}
interface IAddServiceService_IRead extends grpc.MethodDefinition<service_pb.ReadReq, service_pb.FileRes> {
    path: string; // "/proto.AddService/Read"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.ReadReq>;
    requestDeserialize: grpc.deserialize<service_pb.ReadReq>;
    responseSerialize: grpc.serialize<service_pb.FileRes>;
    responseDeserialize: grpc.deserialize<service_pb.FileRes>;
}
interface IAddServiceService_IUpdate extends grpc.MethodDefinition<service_pb.UpdateReq, service_pb.FileRes> {
    path: string; // "/proto.AddService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<service_pb.UpdateReq>;
    responseSerialize: grpc.serialize<service_pb.FileRes>;
    responseDeserialize: grpc.deserialize<service_pb.FileRes>;
}
interface IAddServiceService_IDelete extends grpc.MethodDefinition<service_pb.DeleteReq, service_pb.BoolRes> {
    path: string; // "/proto.AddService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.DeleteReq>;
    requestDeserialize: grpc.deserialize<service_pb.DeleteReq>;
    responseSerialize: grpc.serialize<service_pb.BoolRes>;
    responseDeserialize: grpc.deserialize<service_pb.BoolRes>;
}
interface IAddServiceService_IListFiles extends grpc.MethodDefinition<service_pb.ListFilesReq, service_pb.ListFilesRes> {
    path: string; // "/proto.AddService/ListFiles"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.ListFilesReq>;
    requestDeserialize: grpc.deserialize<service_pb.ListFilesReq>;
    responseSerialize: grpc.serialize<service_pb.ListFilesRes>;
    responseDeserialize: grpc.deserialize<service_pb.ListFilesRes>;
}

export const AddServiceService: IAddServiceService;

export interface IAddServiceServer {
    create: grpc.handleUnaryCall<service_pb.CreateReq, service_pb.FileRes>;
    read: grpc.handleUnaryCall<service_pb.ReadReq, service_pb.FileRes>;
    update: grpc.handleUnaryCall<service_pb.UpdateReq, service_pb.FileRes>;
    delete: grpc.handleUnaryCall<service_pb.DeleteReq, service_pb.BoolRes>;
    listFiles: grpc.handleUnaryCall<service_pb.ListFilesReq, service_pb.ListFilesRes>;
}

export interface IAddServiceClient {
    create(request: service_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    create(request: service_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    create(request: service_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: service_pb.ReadReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: service_pb.ReadReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    read(request: service_pb.ReadReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: service_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: service_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    update(request: service_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    delete(request: service_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    delete(request: service_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    delete(request: service_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    listFiles(request: service_pb.ListFilesReq, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    listFiles(request: service_pb.ListFilesReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    listFiles(request: service_pb.ListFilesReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
}

export class AddServiceClient extends grpc.Client implements IAddServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: service_pb.CreateReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public create(request: service_pb.CreateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public create(request: service_pb.CreateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: service_pb.ReadReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: service_pb.ReadReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public read(request: service_pb.ReadReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: service_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: service_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public update(request: service_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.FileRes) => void): grpc.ClientUnaryCall;
    public delete(request: service_pb.DeleteReq, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    public delete(request: service_pb.DeleteReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    public delete(request: service_pb.DeleteReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.BoolRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: service_pb.ListFilesReq, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: service_pb.ListFilesReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
    public listFiles(request: service_pb.ListFilesReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ListFilesRes) => void): grpc.ClientUnaryCall;
}
