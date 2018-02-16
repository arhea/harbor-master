import * as Code from 'code';
import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('daemon - auth', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .post('/auth')
      .reply(200, {});

    const auth = {
      username: 'test',
      password: 'test',
      serveraddress: 'https://www.example.com'
    };

    harness.client.auth(auth).then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
