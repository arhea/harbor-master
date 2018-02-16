import * as Code from 'code';
import * as Lab from 'lab';
import * as harness from '../harness';

const lab = exports.lab = Lab.script();

lab.experiment('containers - create', () => {

  lab.test('no parameters just body', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(201, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
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

    harness.client.containers().create(model, { name: 'hello-world-201' }).then(() => {
      Code.expect(scope.isDone()).to.equal(true);
    }, () => {
      Code.fail('should be a 201 response');
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - bad parameter', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(400, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.fail('should be a 400 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - no such container', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(404, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.fail('should be a 404 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - impossible to attach', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(406, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.fail('should be a 406 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - conflict', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(409, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.fail('should be a 409 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });

  lab.test('or - server or', (done) => {

    const scope = harness.mock()
      .post('/containers/create')
      .reply(500, {});

    const model = {
      'Image:': 'tutum/hello-world:latest'
    };

    harness.client.containers().create(model).then(() => {
      Code.fail('should be a 500 response');
    }, () => {
      Code.expect(scope.isDone()).to.equal(true);
    }).finally(() => {
      harness.clean();
      done();
    });

  });
});
