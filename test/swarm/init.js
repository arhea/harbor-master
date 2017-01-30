'use strict';

const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('swarm - init', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/swarm/init')
      .reply(200, {});

    const req = harness.client.swarm().init();

    harness.handleSuccess(scope, 200, req, done);

  });

});
