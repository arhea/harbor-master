'use strict';

const _ = require('lodash');

class ContainersClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/containers/json', options);
  }

  create(model) {
    return this.docker.modem.post('/containers/create', null, model);
  }

  inspect(id, options) {
    return this.docker.modem.get('/containers/'+ id +'/json', options);
  }

  top(id, options) {
    return this.docker.modem.get('/containers/'+ id +'/top', options);
  }

  logs(id, options) {
    options = _.defaults(options, {
      details: false,
      follow: false,
      stdout: false,
      stderr: false,
      since: 0,
      timestamps: false,
      tail: 'all'
    });

    if(options.follow) {
      return this.docker.modem.stream('GET', '/containers/'+ id +'/logs', options);
    } else {
      return this.docker.modem.get('/containers/'+ id +'/logs', options);
    }
  }

  changes(id, options) {
    return this.docker.modem.get('/containers/'+ id +'/changes', options);
  }

  export(id, options) {
    return this.docker.modem.download('GET', '/containers/'+ id +'/export', options);
  }

  resize(id, options) {
    options = _.defaults(options, {
      h: 0,
      w: 0
    });

    return this.docker.modem.post('/containers/'+ id +'/resize', options);
  }

  stats(id, options) {
    options = _.defaults(options, {
      stream: true
    });

    if(options.stream) {
      return this.docker.modem.stream('POST', '/containers/'+ id +'/stats', options);
    } else {
      return this.docker.modem.get('/containers/'+ id +'/stats', options);
    }
  }

  start(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/start', options);
  }

  stop(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/stop', options);
  }

  restart(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/restart', options);
  }

  kill(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/kill', options);
  }

  update(id, model) {
    return this.docker.modem.post('/containers/'+ id +'/update', null, model);
  }

  rename(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/rename', options);
  }

  pause(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/pause', options);
  }

  unpause(id, options) {
    return this.docker.modem.post('/containers/'+ id +'/unpause', options);
  }

  attach(id, options) {
    return this.docker.modem.stream('POST', '/containers/'+ id +'/attach', options);
  }

  wait(id) {
    return this.docker.modem.post('/containers/'+ id +'/wait');
  }

  remove(id, options) {
    return this.docker.modem.destroy('/containers/'+ id, options);
  }

  archive(id, options) {
    return this.docker.modem.download('GET', '/containers/'+ id +'/archive', options);
  }

  upload(id, options, data) {
    return this.docker.modem.upload('PUT', '/containers/'+ id +'/archive', options, data);
  }

}

module.exports.Client = function(docker) {
  return new ContainersClient(docker);
};
