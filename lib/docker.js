'use strict';

const modem      = require('./modem');
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
    return this.modem.get('/info');
  }

  auth(serveraddress, username, password) {
    return this.modem.post('/auth', null, {
      username: username,
      password: password,
      serveraddress: serveraddress
    });
  }

  version() {
    return this.modem.get('/version');
  }

  ping() {
    return this.modem.get('/_ping');
  }

  events(options) {
    return this.model.request('/events', options);
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

}

module.exports.Client = function(options) {
  return new DockerClient(options);
};
