import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('volumes - remove', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .delete('/volumes/hello-world')
      .reply(204, {});

    const req = harness.client.volumes().remove('hello-world');

    harness.handleSuccess(scope, 204, req, done);

  });

});
