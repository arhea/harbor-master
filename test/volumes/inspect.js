'use strict';

const Code    = require('code');
const Lab     = require('lab');
const harness = require('../harness');

const lab     = exports.lab = Lab.script();

lab.experiment('volumes - inspect', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/volumes/hello-world')
      .reply(200, {});

    harness.client.volumes().inspect('hello-world').then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
