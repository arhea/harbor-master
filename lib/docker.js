'use strict';

const Joi        = require('joi');
const Promise    = require('bluebird');
const modem      = require('./modem');
const schemas    = require('./schemas/system');
const configs    = require('./endpoints/configs');
const containers = require('./endpoints/containers');
const images     = require('./endpoints/images');
const networks   = require('./endpoints/networks');
const nodes      = require('./endpoints/nodes');
const plugins    = require('./endpoints/plugins');
const services   = require('./endpoints/services');
const swarm      = require('./endpoints/swarm');
const secrets    = require('./endpoints/secrets');
const tasks      = require('./endpoints/tasks');
const volumes    = require('./endpoints/volumes');

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

  auth(options) {
    const self = this;

    options = options || {};

    return self._validate(options, schemas.auth.options).then((params) => {
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

  events(options) {
    const self = this;

    options = options || {};

    return self._validate(options, schemas.events.options).then((params) => {
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

  configs() {
    if(!this._services.configs) {
      this._services.configs = configs.Client(this);
    }

    return this._services.configs;
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

  swarm() {
    if(!this._services.swarm) {
      this._services.swarm = swarm.Client(this);
    }

    return this._services.swarm;
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

  secrets() {
    if(!this._services.secrets) {
      this._services.secrets = secrets.Client(this);
    }

    return this._services.secrets;
  }

  services() {
    if(!this._services.services) {
      this._services.services = services.Client(this);
    }

    return this._services.services;
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
