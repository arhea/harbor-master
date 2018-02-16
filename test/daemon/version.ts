import * as Code from 'code';
import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('daemon - version', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/version')
      .reply(200, {});

    harness.client.version().then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
