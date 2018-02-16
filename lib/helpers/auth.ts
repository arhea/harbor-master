import * as Joi from 'joi';
import * as schemas from '../schemas/system';

export function generate(options) {
  const result = Joi.validate(options, schemas.auth);

  if (result.error) {
    throw new Error('Invalid Registry Authentication Parameters');
  } else {
    options = JSON.stringify(result.value);
    return new Buffer(options).toString('base64');
  }

}
