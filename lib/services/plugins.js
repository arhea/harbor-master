'use strict';

class PluginsClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/plugins', options);
  }

  install(options) {
    return this.docker.modem.post('/plugins/pull', options);
  }

  inspect(name, options) {
    return this.docker.modem.get('/plugins/'+ name, options);
  }

  enable(name) {
    return this.docker.modem.post('/plugins/'+ name + '/enable');
  }

  disable(name) {
    return this.docker.modem.post('/plugins/'+ name + '/disable');
  }

  remove(name) {
    return this.docker.modem.destroy('/plugins/'+ name);
  }

}

module.exports.Client = function(docker) {
  return new PluginsClient(docker);
};
