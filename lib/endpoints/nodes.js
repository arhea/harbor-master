'use strict';

const schemas = require('../schemas/nodes');

class NodesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/nodes',
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'Server Error',
          503: 'Node is not part of a swarm.'
        }
      });
    });
  }

  inspect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/nodes/${id}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'No Such Node',
          500: 'Server Error',
          503: 'Node is not part of a swarm.'
        }
      });
    });
  }

  update(id, model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.update.options).then((params) => {
      return self.docker.modem.post({
        url: `/nodes/${id}/update`,
        qs: params,
        body: model,
        successCodes: {
          200: 'No Error',
          201: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'No Such Node',
          500: 'Server Error',
          503: 'Node is not part of a swarm.'
        }
      });
    });
  }

  remove(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.remove.options).then((params) => {
      return self.docker.modem.destroy({
        url: `/nodes/${id}`,
        qs: params,
        successCodes: {
          200: 'No Error',
          201: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'No Such Node',
          500: 'Server Error',
          503: 'Node is not part of a swarm.'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new NodesClient(docker);
};
