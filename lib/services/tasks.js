'use strict';

class TasksClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    return this.docker.modem.get('/tasks', options);
  }

  inspect(id) {
    return this.docker.modem.get('/tasks'+ id);
  }

}

module.exports.Client = function(docker) {
  return new TasksClient(docker);
};
