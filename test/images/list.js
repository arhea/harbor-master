'use strict';

const Lab     = require('lab');
const harness = require('../harness');

const lab     = exports.lab = Lab.script();

lab.experiment('images - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/images/json')
      .reply(200, {});

    const req = harness.client.images().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
