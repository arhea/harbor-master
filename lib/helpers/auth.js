'use strict';

const Joi     = require('joi');
const schemas = require('../schemas/system');

module.exports.generate = function(options) {
  const result = Joi.validate(options, schemas.auth);

  if(result.error) {
    throw new Error('Invalid Registry Authentication Parameters');
  } else {
    options = JSON.stringify(result.value);
    return new Buffer(options).toString('base64');
  }

};
