'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('volumes - create', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/volumes/create')
      .reply(201, {});

    const data = {};

    harness.client.volumes().create(data).then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 201 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
