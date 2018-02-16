import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('nodes - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/nodes')
      .reply(200, {});

    const req = harness.client.nodes().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
