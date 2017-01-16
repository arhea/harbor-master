'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('containers - inspect', () => {

  lab.test('default options', (done) => {

    const scope = harness.mock()
      .get('/containers/hello-world/json')
      .query({ size: false })
      .reply(200, {});

    harness.client.containers().inspect('hello-world').then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
