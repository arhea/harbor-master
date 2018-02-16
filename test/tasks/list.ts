import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('tasks - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/tasks')
      .reply(200, {});

    const req = harness.client.tasks().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
