'use strict';

class ImagesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/images/json', options);
  }

  build(stream, params, registryAuth) {
    return this.docker.modem.upload('POST', '/build', params, stream, {
      'X-Registry-Auth': JSON.stringify(registryAuth)
    });
  }

  create(options, registryAuth) {
    return this.docker.modem.post('/images/create', options, null, {
      'X-Registry-Auth': JSON.stringify(registryAuth)
    });
  }

  inspect(name) {
    return this.docker.modem.get('/images/'+ name + '/json');
  }

  history(name) {
    return this.docker.modem.get('/images/'+ name + '/history');
  }

  push(name, options, registryAuth) {
    return this.docker.modem.post('/images/'+ name + '/push', options, {
      'X-Registry-Auth': JSON.stringify(registryAuth)
    });
  }

  tag(name, options) {
    return this.docker.modem.post('/images/'+ name + '/tag', options);
  }

  remove(name) {
    return this.docker.modem.destroy('/images/'+ name);
  }

  search(options) {
    return this.docker.modem.destroy('/images/search', options);
  }

}

module.exports.Client = function(docker) {
  return new ImagesClient(docker);
};
