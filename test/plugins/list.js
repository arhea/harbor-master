'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('plugins - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/plugins')
      .reply(200, {});

    const req = harness.client.plugins().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
