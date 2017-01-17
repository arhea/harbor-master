'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.createOptions = Joi.object();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required()
});

module.exports.inspectOptions = Joi.object();

module.exports.removeOptions = Joi.object();
