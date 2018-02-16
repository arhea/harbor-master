import * as Code from 'code';
import { DockerClient } from "../lib/docker";
import * as nock from 'nock';

module.exports.options = {
  host: '10.0.0.1',
  port: 2375
};

export const client = new DockerClient(module.exports.options);

export const mock = () => {
  return nock(`http://${module.exports.options.host}:${module.exports.options.port}/v1.32`);
};

export const clean = () => {
  return nock.cleanAll();
};

export const unmock = () => {
  return nock.restore();
};

export const handleSuccess = (scope, statusCode, promise, done) => {

  promise.then(() => {
    Code.expect(scope.isDone()).to.equal(true);
  }).catch((err) => {
    console.log('Error!', JSON.stringify(err));
    Code.fail(`should be a ${statusCode} response`);
  }).finally(() => {
    nock.cleanAll();
    done();
  });

};

export const handleError = (scope, statusCode, promise, done) => {

  promise.then(() => {
    Code.fail(`should be a ${statusCode} response`);
  }).catch(() => {
    Code.expect(scope.isDone()).to.equal(true);
  }).finally(() => {
    nock.cleanAll();
    done();
  });

};
