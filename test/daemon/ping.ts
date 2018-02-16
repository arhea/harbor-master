import * as Code from 'code';
import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('daemon - ping', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/_ping')
      .reply(200, {});

    harness.client.ping().then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
