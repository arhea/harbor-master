import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('swarm - unlock key', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/swarm/unlockkey')
      .reply(200, {});

    const req = harness.client.swarm().unlockKey();

    harness.handleSuccess(scope, 200, req, done);

  });

});
