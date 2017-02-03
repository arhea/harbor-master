'use strict';

const schemas = require('../schemas/images');

class ImagesClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
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

  build(stream, options, registryAuth) {
    const self = this;

    options = options || {};
    registryAuth = registryAuth || {};

    return self.docker._validate(options, schemas.build.options).then((params) => {
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

  create(options, registryAuth) {
    const self = this;

    options = options || {};
    registryAuth = registryAuth || {};

    return self.docker._validate(options, schemas.create.options).then((params) => {
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

  inspect(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
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

  history(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.history.options).then((params) => {
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

  push(name, options, registryAuth) {
    const self = this;

    options = options || {};
    registryAuth = registryAuth || {};

    return self.docker._validate(options, schemas.push.options).then((params) => {
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

  tag(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.tag.options).then((params) => {
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

  remove(name, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.remove.options).then((params) => {
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

  search(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.search.options).then((params) => {
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

  prune(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.prune.option).then((params) => {
      return self.docker.modem.post({
        url: '/images/prune',
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

  commit(model, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.commit.option).then((params) => {
      return self.docker.modem.post({
        url: '/commit',
        qs: params,
        body: model,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'Server Error'
        }
      });
    });
  }

  export(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.export.options).then((params) => {
      return self.docker.modem.download({
        method: 'GET',
        url: `/images/${id}/export`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          500: 'Server Error',
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new ImagesClient(docker);
};
