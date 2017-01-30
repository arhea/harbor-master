'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('tasks - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/tasks')
      .reply(200, {});

    const req = harness.client.tasks().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
