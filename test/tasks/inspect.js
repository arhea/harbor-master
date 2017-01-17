'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('tasks - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/tasks/hello-world')
      .reply(200, {});

    harness.client.tasks().inspect('hello-world').then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, (err) => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
