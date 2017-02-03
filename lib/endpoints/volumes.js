'use strict';

const schemas = require('../schemas/volumes');

class VolumesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/volumes',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          500: 'server error'
        }
      });
    });
  }

  create(model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.create.options).then((params) => {
      return self.docker.modem.post({
        url: '/volumes/create',
        qs: params,
        body: model,
        successCodes: {
          201: 'no error'
        },
        errorCodes: {
          500: 'server error'
        }
      });
    });
  }

  inspect(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/volumes/${name}`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such volume',
          500: 'server error'
        }
      });
    });
  }

  remove(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.remove.options).then((params) => {
      return self.docker.modem.destroy({
        url: `/volumes/${name}`,
        qs: params,
        successCodes: {
          204: 'no error'
        },
        errorCodes: {
          404: 'no such volume',
          409: 'volume is in use and cannot be removed',
          500: 'server error'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new VolumesClient(docker);
};
