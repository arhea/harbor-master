'use strict';

const Joi        = require('joi');
const Promise    = require('bluebird');
const modem      = require('./modem');
const schemas    = require('./schemas/docker');
const containers = require('./services/containers');
const images     = require('./services/images');
const networks   = require('./services/networks');
const nodes      = require('./services/nodes');
const plugins    = require('./services/plugins');
const services   = require('./services/services');
const swarm      = require('./services/swarm');
const tasks      = require('./services/tasks');
const volumes    = require('./services/volumes');

class DockerClient {

  constructor(options) {
    this.modem = modem.Client(options);
    this._services = {};
  }

  info() {
    return this.modem.get({
      url: '/info',
      successCodes: {
        200: 'no error'
      },
      errorCodes: {
        500: 'server error'
      }
    });
  }

  auth(options = {}) {
    const self = this;

    return self._validate(options, schemas.authOptions).then((params) => {
      return self.modem.post({
        url: '/auth',
        body: params,
        successCodes: {
          200: 'no error',
          204: 'no error'
        },
        errorCodes: {
          500: 'Server Error'
        }
      });
    });
  }

  version() {
    return this.modem.get({
      url: '/version',
      successCodes: {
        200: 'no error'
      },
      errorCodes: {
        500: 'server error'
      }
    });
  }

  ping() {
    return this.modem.get({
      url: '/_ping',
      successCodes: {
        200: 'no error'
      },
      errorCodes: {
        500: 'server error'
      }
    });
  }

  events(options = {}) {
    const self = this;

    return self._validate(options, schemas.eventsOptions).then((params) => {
      return self.modem.stream({
        method: 'GET',
        url: '/events',
        qs: params,
        successCodes: {
          204: 'No Error'
        },
        errorCodes: {
          404: 'no such volume',
          409: 'volume is in use and cannot be removed',
          500: 'Server Error'
        }
      });
    });
  }

  containers() {
    if(!this._services.containers) {
      this._services.containers = containers.Client(this);
    }

    return this._services.containers;
  }

  images() {
    if(!this._services.images) {
      this._services.images = images.Client(this);
    }

    return this._services.images;
  }

  networks() {
    if(!this._services.networks) {
      this._services.networks = networks.Client(this);
    }

    return this._services.networks;
  }

  nodes() {
    if(!this._services.nodes) {
      this._services.nodes = nodes.Client(this);
    }

    return this._services.nodes;
  }

  plugins() {
    if(!this._services.plugins) {
      this._services.plugins = plugins.Client(this);
    }

    return this._services.plugins;
  }

  services() {
    if(!this._services.services) {
      this._services.services = services.Client(this);
    }

    return this._services.services;
  }

  swarm() {
    if(!this._services.swarm) {
      this._services.swarm = swarm.Client(this);
    }

    return this._services.swarm;
  }

  tasks() {
    if(!this._services.tasks) {
      this._services.tasks = tasks.Client(this);
    }

    return this._services.tasks;
  }

  volumes() {
    if(!this._services.volumes) {
      this._services.volumes = volumes.Client(this);
    }

    return this._services.volumes;
  }

  _validate(value, schema) {

    return new Promise((resolve, reject) => {

      Joi.validate(value, schema, {}, (err, value) => {
        if(!err) {
          resolve(value);
        } else {
          reject(err);
        }
      });

    });

  }

}

module.exports.Client = function(options) {
  return new DockerClient(options);
};
