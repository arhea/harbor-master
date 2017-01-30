'use strict';

const Lab     = require('lab');
const harness = require('../harness');

const lab     = exports.lab = Lab.script();

lab.experiment('images - search', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/images/search')
      .query({ term: 'hello-world' })
      .reply(200, {});

    const req = harness.client.images().search({
      term: 'hello-world'
    });

    harness.handleSuccess(scope, 200, req, done);

  });

});
