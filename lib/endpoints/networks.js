'use strict';

const schemas = require('../schemas/networks');

class NetworksClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/networks',
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
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
        url: '/networks/create',
        qs: params,
        body: model,
        successCodes: {
          201: 'No Error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'plguin not found',
          500: 'server error'
        }
      });
    });
  }

  inspect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/networks/${id}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          500: 'Server Error'
        }
      });
    });
  }

  remove(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.remove.options).then((params) => {
      return self.docker.modem.destroy({
        url: `/networks/${id}`,
        qs: params,
        successCodes: {
          204: 'No Error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'network is not found',
          500: 'server error'
        }
      });
    });
  }

  connect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.connect.options).then((params) => {
      return self.docker.modem.post({
        url: `/networks/${id}/connect`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad Parameter',
          403: 'operation not supported for swarm scoped networks',
          404: 'network or container is not found',
          500: 'server Error'
        }
      });
    });
  }

  disconnect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.connect.options).then((params) => {
      return self.docker.modem.post({
        url: `/networks/${id}/disconnect`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad Parameter',
          403: 'operation not supported for swarm scoped networks',
          404: 'network or container is not found',
          500: 'server Error'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new NetworksClient(docker);
};
