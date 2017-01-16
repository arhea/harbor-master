'use strict';

const Joi = require('joi');

module.exports.leaveOptions = Joi.object().keys({
  force: Joi.boolean().default(false)
});

module.exports.joinOptions = Joi.any().forbidden();

module.exports.initOptions = Joi.any().forbidden();

module.exports.inspectOptions = Joi.any().forbidden();

module.exports.updateOptions = Joi.object().keys({
  version: Joi.string().required(),
  rotateManagerToken: Joi.boolean().default(false),
  rotateWorkerToken: Joi.boolean().default(false)
});
