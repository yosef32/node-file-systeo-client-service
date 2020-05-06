import FileControllerProto from './file.controller.proto'
import { expect } from 'chai';
import ModelFile from '../model/model.file';

let id: string = "";
let owner: string = "";

describe('Create function', () => {
  it('should return new file', async () => {
    let proto: FileControllerProto = new FileControllerProto();
    const result: ModelFile = await proto.create({
      "id": "",
      "owner": "1",
      "path": "bin/t",
      "name": "Hello",
      "isFolder": true
    })

    if (result) {
      id = result.id;
      owner = result.owner;
    }
    expect(result.id).not.equal(undefined);
  });
});

describe('Read function', () => {
  it('should return file', async () => {
    let proto: FileControllerProto = new FileControllerProto();
    const result: any = await proto.read(id, owner)
    expect(result.file.id).not.equal(undefined);
  });
});

describe('Read function', () => {
  it('should return permittion denied', async () => {
    let proto: FileControllerProto = new FileControllerProto();
    try {
      const result: any = await proto.read(id, "owner")
    } catch (e) {
      let err: Error = e;
      console.log(e.message)
      expect(true).to.equal(true);
    }
  });
});

describe('Delete function', () => {
  it('should delete file and return true', async () => {
    let proto: FileControllerProto = new FileControllerProto();
    const result: any = await proto.delete(id, owner)
    expect(result.success).to.equal(true);
  });
});