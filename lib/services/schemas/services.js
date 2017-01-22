'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.createOptions = Joi.object();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required()
});

module.exports.logOptions = Joi.object().keys({
  details: Joi.boolean().default(false),
  follow: Joi.boolean().default(false),
  stdout: Joi.boolean().default(false),
  stderr: Joi.boolean().default(false),
  since: Joi.number().default(0),
  timestamps: Joi.boolean().default(false),
  tail: Joi.any().default('all')
});

module.exports.inspectOptions = Joi.object();

module.exports.removeOptions = Joi.object();
