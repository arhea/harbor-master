'use strict';

class NetworksClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/networks', options);
  }

  create(options) {
    return this.docker.modem.post('/networks/create', null, options);
  }

  inspect(id) {
    return this.docker.modem.get('/networks/'+ id);
  }

  remove(id) {
    return this.docker.modem.destroy('/networks/'+ id);
  }

  connect(id, options) {
    return this.docker.modem.post('/networks/'+ id + '/connect', options);
  }

  disconnect(id, options) {
    return this.docker.modem.post('/networks/'+ id + '/disconnect', options);
  }

}

module.exports.Client = function(docker) {
  return new NetworksClient(docker);
};
