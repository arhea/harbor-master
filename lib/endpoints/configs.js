'use strict';

const schemas = require('../schemas/configs');

class ConfigClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/configs',
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'Server Error'
        }
      });
    });
  }

  create(model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.create.options).then((params) => {
      return self.docker.modem.post({
        url: '/configs/create',
        qs: params,
        body: model,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          406: 'server error or node is not part of a swarm',
          409: 'name conflicts with an existing object',
          500: 'Server Error'
        }
      });
    });
  }

  inspect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/configs/${id}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          406: 'server error or node is not part of a swarm',
          409: 'name conflicts with an existing object',
          500: 'Server Error'
        }
      });
    });
  }

  update(id, model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.update.options).then((params) => {
      return self.docker.modem.post({
        url: `/configs/${id}/update`,
        qs: params,
        body: model,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          404: 'no such secret',
          500: 'server error'
        }
      });
    });
  }

  remove(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.remove.options).then((params) => {
      return self.docker.modem.destroy({
        url: `/plugins/${id}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          404: 'secret not installed',
          500: 'server not found'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new ConfigClient(docker);
};
