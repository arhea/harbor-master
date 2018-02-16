import * as schemas from '../schemas/tasks';

export default class TasksClient {

  constructor(private docker) {
  }

  list(options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.list.options).then((params) => {
      return self.docker.modem.get({
        url: '/tasks',
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          500: 'server error'
        }
      });
    });
  }

  inspect(id, options) {
    const self = this;

    options = options || {};

    return self.docker._validate(options, schemas.inspect.options).then((params) => {
      return self.docker.modem.get({
        url: `/tasks/${id}`,
        qs: params,
        successCodes: {
          200: 'no error'
        },
        errorCodes: {
          404: 'unknown task',
          500: 'server error'
        }
      });
    });
  }

}
