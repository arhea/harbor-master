'use strict';

const schemas = require('./schemas/images');

class ImagesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.listOptions).then((params) => {
      return self.docker.modem.get({
        url: '/images/json',
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

  build(stream, options = {}, registryAuth = {}) {
    const self = this;

    return self.docker._validate(options, schemas.buildOptions).then((params) => {
      return self.docker.modem.upload(stream, {
        method: 'POST',
        url: '/build',
        qs: params,
        headers: {
          'Content-type': 'application/tar',
          'X-Registry-Auth': JSON.stringify(registryAuth)
        },
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

  create(options = {}, registryAuth = {}) {
    const self = this;

    return self.docker._validate(options, schemas.createOptions).then((params) => {
      return self.docker.modem.post({
        url: '/images/create',
        qs: params,
        headers: {
          'X-Registry-Auth': JSON.stringify(registryAuth)
        },
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

  inspect(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.inspectOptions).then((params) => {
      return self.docker.modem.get({
        url: `/images/${name}/json`,
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

  history(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.historyOptions).then((params) => {
      return self.docker.modem.get({
        url: `/images/${name}/history`,
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

  push(name, options = {}, registryAuth = {}) {
    const self = this;

    return self.docker._validate(options, schemas.pushOptions).then((params) => {
      return self.docker.modem.post({
        url: `/images/${name}/push`,
        qs: params,
        headers: {
          'X-Registry-Auth': JSON.stringify(registryAuth)
        },
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

  tag(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.tagOptions).then((params) => {
      return self.docker.modem.post({
        url: `/images/${name}/tag`,
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

  remove(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.removeOptions).then((params) => {
      return self.docker.modem.destroy({
        url: `/images/${name}`,
        qs: params,
        successCodes: {
          204: 'No Error'
        },
        errorCodes: {
          400: 'bad parameter',
          404: 'no such image',
          409: 'conflict',
          500: 'server error'
        }
      });
    });
  }

  search(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.searchOptions).then((params) => {
      return self.docker.modem.get({
        url: '/images/search',
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

}

module.exports.Client = function(docker) {
  return new ImagesClient(docker);
};
