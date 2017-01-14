'use strict';

class VolumesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/volumes', options);
  }

  create(options) {
    return this.docker.modem.post('/volumes/create', null, options);
  }

  inspect(name) {
    return this.docker.modem.get('/volumes/'+ name);
  }

  remove(name) {
    return this.docker.modem.destroy('/volumes/'+ name);
  }

}

module.exports.Client = function(docker) {
  return new VolumesClient(docker);
};
