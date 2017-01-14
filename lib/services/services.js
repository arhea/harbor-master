'use strict';

class ServicesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/services', options);
  }

  create(model) {
    return this.docker.modem.post('/services/create', null, model);
  }

  inspect(name) {
    return this.docker.modem.get('/services/inspect'+ name);
  }

  update(id, model) {
    return this.docker.modem.post('/services'+ id + '/update', null, model);
  }

  remove(id) {
    return this.docker.modem.destroy('/services/'+ id);
  }

}

module.exports.Client = function(docker) {
  return new ServicesClient(docker);
};
