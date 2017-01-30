'use strict';

const schemas = require('./schemas/swarm');

class SwarmClient {

  constructor(docker) {
    this.docker = docker;
  }

  inspect(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.inspectOptions).then((params) => {
      return self.docker.modem.get({
        url: '/swarm',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {}
      });
    });
  }

  init(model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.initOptions).then((params) => {
      return self.docker.modem.post({
        url: '/swarm/init',
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          503: 'node is already part of a swarm'
        }
      });
    });
  }

  join(model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.joinOptions).then((params) => {
      return self.docker.modem.post({
        url: '/swarm/join',
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          503: 'node is already part of a swarm'
        }
      });
    });
  }

  leave(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.leaveOptions).then((params) => {
      return self.docker.modem.post({
        url: '/swarm/leave',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          406: 'node is not part of a swarm'
        }
      });
    });
  }

  update(model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.updateOptions).then((params) => {
      return self.docker.modem.post({
        url: '/swarm/update',
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          400: 'bad parameter',
          503: 'node is not part of a swarm'
        }
      });
    });
  }

  unlockKey(options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.unlockKeyOptions).then((params) => {
      return self.docker.modem.get({
        url: '/swarm/unlockkey',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: { }
      });
    });
  }

  unlock(model, options = {}) {
    const self = this;

    return self.docker._validate(options, schemas.unlockOptions).then((params) => {
      return self.docker.modem.post({
        url: '/swarm/unlock',
        qs: params,
        body: model,
        successCodes: {
          200: 'no error'
        },
        errorCodes: { }
      });
    });
  }

}

module.exports.Client = function(docker) {
  return new SwarmClient(docker);
};
