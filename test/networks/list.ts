import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('networks - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/networks')
      .reply(200, {});

    const req = harness.client.networks().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
