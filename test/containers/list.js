'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const lab    = exports.lab = Lab.script();

lab.experiment('containers - list', () => {

  lab.test('default parameters', (done) => {

    const scope = harness.mock()
      .get('/containers/json')
      .query({all: false, size: false})
      .reply(200, []);

    harness.client.containers().list().then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('passing the all parameter', (done) => {

    const scope = harness.mock()
      .get('/containers/json')
      .query({all: true, size: false})
      .reply(200, []);

    harness.client.containers().list({ all: true }).then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 200 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - bad parameter', (done) => {

    const scope = harness.mock()
      .get('/containers/json')
      .query({all: false, size: false})
      .reply(400, []);

    harness.client.containers().list().then(() => {
      Code.fail('should be a 400 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - server or', (done) => {

    const scope = harness.mock()
      .get('/containers/json')
      .query({all: false, size: false})
      .reply(500, []);

    harness.client.containers().list().then(() => {
      Code.fail('should be a 500 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

});
