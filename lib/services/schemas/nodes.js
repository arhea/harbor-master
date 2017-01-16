'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.inspectOptions = Joi.any().forbidden();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required()
});

module.exports.removeOptions = Joi.object().keys({
  force: Joi.boolean().default(false)
});
