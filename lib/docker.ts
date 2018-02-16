import * as Joi from 'joi';
import * as Promise from 'bluebird';
import * as schemas from './schemas/system';
import Modem from "./modem";
import ConfigClient from "./endpoints/configs";
import ContainersClient from "./endpoints/containers";
import ImagesClient from "./endpoints/images";
import NetworksClient from "./endpoints/networks";
import NodesClient from "./endpoints/nodes";
import PluginsClient from "./endpoints/plugins";
import ServicesClient from "./endpoints/services";
import SwarmClient from "./endpoints/swarm";
import SecretsClient from "./endpoints/secrets";
import TasksClient from "./endpoints/tasks";
import VolumesClient from "./endpoints/volumes";

export class DockerClient {

  private modem: Modem;
  private _services: any;

  constructor(options) {
    this.modem = new Modem(options);
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

  events(options = {}) {
    const self = this;

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
    if (!this._services.configs) {
      this._services.configs = new ConfigClient(this);
    }

    return this._services.configs;
  }

  containers() {
    if (!this._services.containers) {
      this._services.containers = new ContainersClient(this);
    }

    return this._services.containers;
  }

  images() {
    if (!this._services.images) {
      this._services.images = new ImagesClient(this);
    }

    return this._services.images;
  }

  swarm() {
    if (!this._services.swarm) {
      this._services.swarm = new SwarmClient(this);
    }

    return this._services.swarm;
  }

  networks() {
    if (!this._services.networks) {
      this._services.networks = new NetworksClient(this);
    }

    return this._services.networks;
  }

  nodes() {
    if (!this._services.nodes) {
      this._services.nodes = new NodesClient(this);
    }

    return this._services.nodes;
  }

  plugins() {
    if (!this._services.plugins) {
      this._services.plugins = new PluginsClient(this);
    }

    return this._services.plugins;
  }

  secrets() {
    if (!this._services.secrets) {
      this._services.secrets = new SecretsClient(this);
    }

    return this._services.secrets;
  }

  services() {
    if (!this._services.services) {
      this._services.services = new ServicesClient(this);
    }

    return this._services.services;
  }

  tasks() {
    if (!this._services.tasks) {
      this._services.tasks = new TasksClient(this);
    }

    return this._services.tasks;
  }

  volumes() {
    if (!this._services.volumes) {
      this._services.volumes = new VolumesClient(this);
    }

    return this._services.volumes;
  }

  _validate(value, schema) {

    return new Promise((resolve, reject) => {

      Joi.validate(value, schema, {}, (err, value) => {
        if (!err) {
          resolve(value);
        } else {
          reject(err);
        }
      });

    });

  }

}
