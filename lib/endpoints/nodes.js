'use strict';

const schemas = require('../schemas/networks');

class NodesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/nodes',
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

  inspect(id, options = {}) {
    const self = this;

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
          500: 'Server Error'
        }
      });
    });
  }

  update(id, model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.update.options).then((params) => {
      return self.docker.modem.post({
        url: `/nodes/${id}/update`,
        qs: params,
        body: model,
        successCodes: {
          201: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'No Such Node',
          500: 'Server Error'
        }
      });
    });
  }

  remove(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.remove.options).then((params) => {
      return self.docker.modem.destroy({
        url: `/nodes/${id}`,
        qs: params,
        successCodes: {
          201: 'No Error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'No Such Node',
          500: 'Server Error'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new NodesClient(docker);
};
