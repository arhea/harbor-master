'use strict';

class NodesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/nodes', options);
  }

  create(options) {
    return this.docker.modem.post('/nodes/create', null, options);
  }

  inspect(id) {
    return this.docker.modem.get('/nodes/'+ id);
  }

  update(id, model, options) {
    return this.docker.modem.post('/nodes/'+ id, options, model);
  }

  remove(id) {
    return this.docker.modem.destroy('/nodes/'+ id);
  }

}

module.exports.Client = function(docker) {
  return new NodesClient(docker);
};
