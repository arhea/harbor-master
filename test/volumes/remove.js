'use strict';

const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('volumes - remove', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .delete('/volumes/hello-world')
      .reply(204, {});

    const req = harness.client.volumes().remove('hello-world');

    harness.handleSuccess(scope, 204, req, done);

  });

});
