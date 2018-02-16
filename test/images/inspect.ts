import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('images - inspect', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/images/hello-world/json')
      .reply(200, {});

    const req = harness.client.images().inspect('hello-world');

    harness.handleSuccess(scope, 200, req, done);

  });

});
