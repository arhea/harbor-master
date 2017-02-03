'use strict';

const schemas = require('../schemas/services');

class ServicesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/services',
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
        url: '/services/create',
        qs: params,
        body: model,
        successCodes: {
          201: 'No Error'
        },
        errorCodes: {
          406: 'server error or node is not part of a swarm',
          409: 'name conflicts with an existing object'
        }
      });
    });
  }

  inspect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/services/${id}`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'service not found',
          500: 'server error'
        }
      });
    });
  }

  logs(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.log.options).then((params) => {
      return self.docker.modem.stream({
        method: 'GET',
        url: `/services/${id}/logs`,
        qs: params,
        successCodes: {
          101: 'logs returned as a stream',
          200: 'no error'
        },
        errorCodes: {
          404: 'service not found',
          500: 'server error'
        }
      });
    });
  }

  update(id, model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.update.options).then((params) => {
      return self.docker.modem.post({
        url: `/services/${id}/update`,
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'service not found',
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
        url: `/services/${id}`,
        qs: params,
        successCodes: {
          204: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'no such service',
          409: 'conflict',
          500: 'server error'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new ServicesClient(docker);
};
