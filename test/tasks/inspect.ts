import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('tasks - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/tasks/hello-world')
      .reply(200, {});

    const req = harness.client.tasks().inspect('hello-world');

    harness.handleSuccess(scope, 200, req, done);

  });

});
