'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('volumes - remove', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .delete('/volumes/hello-world')
      .reply(204, {});

    harness.client.volumes().remove('hello-world').then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 204 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
