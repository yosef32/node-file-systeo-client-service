import FileControllerProto from './file.controller.proto'
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Create function', () => {
  it('should return new file', () => {
    let proto: FileControllerProto = new FileControllerProto();
    const result = proto.create({});
    expect(result).to.equal('Hello - World!');
  });
});