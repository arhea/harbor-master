'use strict';

const schemas = require('./schemas/plugins');

class PluginsClient {

  constructor(docker) {
    this.docker = docker;
  }

  list(options) {
    const self = this;

    return self.docker._validate(options, schemas.listOptions).then((params) => {
      return self.docker.modem.get({
        url: '/plugins',
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

  install(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.installOptions).then((params) => {
      return self.docker.modem.post({
        url: '/plugins/pull',
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'plugin already exists or error parsing reference'
        }
      });
    });
  }

  inspect(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.inspectOptions).then((params) => {
      return self.docker.modem.get({
        url: `/plugins/${name}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          404: 'plugin not installed'
        }
      });
    });
  }

  enable(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.enableOptions).then((params) => {
      return self.docker.modem.post({
        url: `/plugins/${name}/enable`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'plugin already enabled'
        }
      });
    });
  }

  disable(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.disableOptions).then((params) => {
      return self.docker.modem.post({
        url: `/plugins/${name}/disable`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          500: 'plugin already disabled'
        }
      });
    });
  }

  remove(name, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.removeOptions).then((params) => {
      return self.docker.modem.destroy({
        url: `/plugins/${name}`,
        qs: params,
        successCodes: {
          200: 'No Error'
        },
        errorCodes: {
          404: 'plugin not installed',
          500: 'plugin is active'
        }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new PluginsClient(docker);
};
