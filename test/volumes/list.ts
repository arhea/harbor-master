import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('volumes - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/volumes')
      .reply(200, {});

    const req = harness.client.volumes().list();

    harness.handleSuccess(scope, 200, req, done);

  });

});
