'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('swarm - leave', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/swarm/leave')
      .query({force: false})
      .reply(200, {});

    const req = harness.client.swarm().leave();

    harness.handleSuccess(scope, 200, req, done);

  });

});
