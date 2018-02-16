import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('swarm - unlock', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/swarm/unlock')
      .reply(200, {});

    const req = harness.client.swarm().unlock();

    harness.handleSuccess(scope, 200, req, done);

  });

});
