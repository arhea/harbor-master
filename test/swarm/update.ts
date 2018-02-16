import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('swarm - update', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/swarm/update')
      .query({
        version: 2,
        rotateManagerToken: false,
        rotateWorkerToken: false
      })
      .reply(200, {});

    const req = harness.client.swarm().update({}, { version: '2' });

    harness.handleSuccess(scope, 200, req, done);

  });

});
