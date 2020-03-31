// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var files_pb = require('./files_pb.js');

function serialize_files_CreateReq(arg) {
  if (!(arg instanceof files_pb.CreateReq)) {
    throw new Error('Expected argument of type files.CreateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_CreateReq(buffer_arg) {
  return files_pb.CreateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_DeleteReq(arg) {
  if (!(arg instanceof files_pb.DeleteReq)) {
    throw new Error('Expected argument of type files.DeleteReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_DeleteReq(buffer_arg) {
  return files_pb.DeleteReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_DeleteRes(arg) {
  if (!(arg instanceof files_pb.DeleteRes)) {
    throw new Error('Expected argument of type files.DeleteRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_DeleteRes(buffer_arg) {
  return files_pb.DeleteRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_FileRes(arg) {
  if (!(arg instanceof files_pb.FileRes)) {
    throw new Error('Expected argument of type files.FileRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_FileRes(buffer_arg) {
  return files_pb.FileRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_ListFilesReq(arg) {
  if (!(arg instanceof files_pb.ListFilesReq)) {
    throw new Error('Expected argument of type files.ListFilesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_ListFilesReq(buffer_arg) {
  return files_pb.ListFilesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_ListFilesRes(arg) {
  if (!(arg instanceof files_pb.ListFilesRes)) {
    throw new Error('Expected argument of type files.ListFilesRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_ListFilesRes(buffer_arg) {
  return files_pb.ListFilesRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_ReadReq(arg) {
  if (!(arg instanceof files_pb.ReadReq)) {
    throw new Error('Expected argument of type files.ReadReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_ReadReq(buffer_arg) {
  return files_pb.ReadReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_files_UpdateReq(arg) {
  if (!(arg instanceof files_pb.UpdateReq)) {
    throw new Error('Expected argument of type files.UpdateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_files_UpdateReq(buffer_arg) {
  return files_pb.UpdateReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  create: {
    path: '/files.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: files_pb.CreateReq,
    responseType: files_pb.FileRes,
    requestSerialize: serialize_files_CreateReq,
    requestDeserialize: deserialize_files_CreateReq,
    responseSerialize: serialize_files_FileRes,
    responseDeserialize: deserialize_files_FileRes,
  },
  read: {
    path: '/files.FileService/Read',
    requestStream: false,
    responseStream: false,
    requestType: files_pb.ReadReq,
    responseType: files_pb.FileRes,
    requestSerialize: serialize_files_ReadReq,
    requestDeserialize: deserialize_files_ReadReq,
    responseSerialize: serialize_files_FileRes,
    responseDeserialize: deserialize_files_FileRes,
  },
  update: {
    path: '/files.FileService/Update',
    requestStream: false,
    responseStream: false,
    requestType: files_pb.UpdateReq,
    responseType: files_pb.FileRes,
    requestSerialize: serialize_files_UpdateReq,
    requestDeserialize: deserialize_files_UpdateReq,
    responseSerialize: serialize_files_FileRes,
    responseDeserialize: deserialize_files_FileRes,
  },
  delete: {
    path: '/files.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: files_pb.DeleteReq,
    responseType: files_pb.DeleteRes,
    requestSerialize: serialize_files_DeleteReq,
    requestDeserialize: deserialize_files_DeleteReq,
    responseSerialize: serialize_files_DeleteRes,
    responseDeserialize: deserialize_files_DeleteRes,
  },
  listFiles: {
    path: '/files.FileService/ListFiles',
    requestStream: false,
    responseStream: false,
    requestType: files_pb.ListFilesReq,
    responseType: files_pb.ListFilesRes,
    requestSerialize: serialize_files_ListFilesReq,
    requestDeserialize: deserialize_files_ListFilesReq,
    responseSerialize: serialize_files_ListFilesRes,
    responseDeserialize: deserialize_files_ListFilesRes,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
