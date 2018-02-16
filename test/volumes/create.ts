import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('volumes - create', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/volumes/create')
      .reply(201, {});

    const data = {};

    const req = harness.client.volumes().create(data);

    harness.handleSuccess(scope, 201, req, done);

  });

});
