'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.createOptions = Joi.any().forbidden();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required()
});

module.exports.inspectOptions = Joi.any().forbidden();

module.exports.removeOptions = Joi.any().forbidden();
