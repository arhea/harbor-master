'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('swarm - unlock key', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/swarm/unlockkey')
      .reply(200, {});

    const req = harness.client.swarm().unlockKey();

    harness.handleSuccess(scope, 200, req, done);

  });

});
