'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.createOptions = Joi.any().forbidden();

module.exports.inspectOptions = Joi.any().forbidden();

module.exports.removeOptions = Joi.any().forbidden();
