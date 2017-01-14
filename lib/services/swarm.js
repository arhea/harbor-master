'use strict';

class SwarmClient {

  constructor(docker) {
    this.docker = docker;
  }

  inspect() {
    return this.docker.modem.get('/swarm');
  }

  init(model) {
    return this.docker.modem.post('/swarm/init', null, model);
  }

  join(model) {
    return this.docker.modem.post('/swarm/join', null, model);
  }

  leave(options) {
    return this.docker.modem.post('/swarm/leave', options);
  }

  update(model, options) {
    return this.docker.modem.post('/swarm/leave', options, model);
  }

}

module.exports.Client = function(docker) {
  return new SwarmClient(docker);
};
