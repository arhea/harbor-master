'use strict';

const Code   = require('code');
const Lab    = require('lab');
const harness = require('../harness');

const expect = Code.expect;
const lab    = exports.lab = Lab.script();

lab.experiment('containers - list', () => {

  lab.test('no parameters just body', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(201, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.expect(scope.isDone()).to.equal(true);
    }, (err) => {
      Code.fail('should be a 201 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('with name parameters', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .query({name: 'hello-world-201'})
      .reply(201, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model, { name: 'hello-world-201' }).then((data) => {
      Code.expect(scope.isDone()).to.equal(true);
    }, (err) => {
      Code.fail('should be a 201 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('error - bad parameter', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(400, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.fail('should be a 400 response');
    }, (err) => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('error - no such container', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(404, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.fail('should be a 404 response');
    }, (err) => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('error - impossible to attach', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(406, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.fail('should be a 406 response');
    }, (err) => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('error - conflict', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(409, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.fail('should be a 409 response');
    }, (err) => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('error - server error', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(500, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then((data) => {
      Code.fail('should be a 500 response');
    }, (err) => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });
});
