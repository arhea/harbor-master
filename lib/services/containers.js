'use strict';

const schemas = require('./schemas/containers');

class ContainersClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.listOptions).then((params) => {
      return self.docker.modem.get({
        url: '/containers/json',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          500: 'Server Error'
        }
      });
    });
  }

  create(model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.createOptions).then((params) => {
      return this.docker.modem.post({
        url: '/containers/create',
        qs: params,
        body: model,
        successCodes: {
          201: 'no error'
        },
        errorCodes: {
          400: 'Bad Parameter',
          404: 'no such container',
          406: 'Impossible to Attach',
          409: 'Conflict',
          500: 'Server Error',
        }
      });
    });
  }

  inspect(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.inspectOptions).then((params) => {
      return self.docker.modem.get({
        url: `/containers/${id}/json`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  top(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.topOptions).then((params) => {
      return self.docker.modem.get({
        url: `/containers/${id}/top`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  logs(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.logsOptions).then((params) => {

      const req = {
        url: `/containers/${id}/logs`,
        qs: params,
        successCodes: {
          101: 'Hints proxy about hijacking',
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      };

      if(params.follow) {
        req.method = 'GET';
        return self.docker.modem.stream(req);
      } else {
        return self.docker.modem.get(req);
      }
    });
  }

  changes(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.changesOptions).then((params) => {
      return self.docker.modem.get({
        url: `/containers/${id}/changes`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  export(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.exportOptions).then((params) => {
      return self.docker.modem.download({
        method: 'GET',
        url: `/containers/${id}/export`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  resize(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.resizeOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/resize`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  stats(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.statsOptions).then((params) => {
      const req = {
        url: `/containers/${id}/stats`,
        qs: params,
        successCodes: {
          101: 'Hints proxy about hijacking',
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      };

      if(params.stream) {
        req.method = 'GET';
        return self.docker.modem.stream(req);
      } else {
        return self.docker.modem.get(req);
      }
    });
  }

  start(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.startOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/start`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  stop(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.stopOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/stop`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  restart(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.restartOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/restart`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  kill(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.killOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/kill`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  update(id, model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.updateOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/update`,
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  rename(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.renameOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/rename`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  pause(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.pauseOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/pause`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  unpause(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.pauseOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/unpause`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  attach(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.pauseOptions).then((params) => {
      return self.docker.modem.stream({
        method: 'POST',
        url: `/containers/${id}/attach`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  wait(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.waitOptions).then((params) => {
      return self.docker.modem.post({
        url: `/containers/${id}/wait`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  remove(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.removeOptions).then((params) => {
      return self.docker.modem.destroy({
        url: `/containers/${id}`,
        qs: params,
        successCodes: {
          204: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  archive(id, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.archiveOptions).then((params) => {
      return self.docker.modem.download({
        method: 'GET',
        url: `/containers/${id}/archive`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

  upload(id, stream, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.uploadOptions).then((params) => {
      return self.docker.modem.upload(stream, {
        method: 'PUT',
        url: `/containers/${id}/archive`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'no such container',
          500: 'Server Error',
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new ContainersClient(docker);
};
