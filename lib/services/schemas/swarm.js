'use strict';

const Joi = require('joi');

module.exports.leaveOptions = Joi.object().keys({
  force: Joi.boolean().default(false)
});

module.exports.joinOptions = Joi.object();

module.exports.initOptions = Joi.object();

module.exports.inspectOptions = Joi.object();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required(),
  rotateManagerToken: Joi.boolean().default(false),
  rotateWorkerToken: Joi.boolean().default(false)
});
