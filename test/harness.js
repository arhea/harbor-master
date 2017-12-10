'use strict';

const Code   = require('code');
const docker = require('../index');
const nock   = require('nock');

module.exports.options = {
  host: '10.0.0.1',
  port: 2375
};

module.exports.client = docker.Client(module.exports.options);

module.exports.mock = () => {
  return nock(`http://${module.exports.options.host}:${module.exports.options.port}/v1.32`);
};

module.exports.clean = () => {
  return nock.cleanAll();
};

module.exports.unmock = () => {
  return nock.restore();
};

module.exports.handleSuccess = (scope, statusCode, promise, done) => {

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

module.exports.handleError = (scope, statusCode, promise, done) => {

  promise.then(() => {
    Code.fail(`should be a ${statusCode} response`);
  }).catch(() => {
    Code.expect(scope.isDone()).to.equal(true);
  }).finally(() => {
    nock.cleanAll();
    done();
  });

};
