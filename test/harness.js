'use strict';

const docker = require('../index');
const nock   = require('nock');

module.exports.options = {
  host: '10.0.0.1',
  port: 2375
};

module.exports.client = docker.Client(module.exports.options);

module.exports.mock = () => {
  return nock(`http://${module.exports.options.host}:${module.exports.options.port}`);
};

module.exports.clean = () => {
  return nock.cleanAll();
};

module.exports.unmock = () => {
  return nock.restore();
};
