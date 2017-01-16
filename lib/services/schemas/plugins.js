'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.any().forbidden();

module.exports.installOptions = Joi.object().keys({
  name: Joi.string().required()
});

module.exports.inspectOptions = Joi.any().forbidden();

module.exports.enableOptions = Joi.any().forbidden();

module.exports.disableOptions = Joi.any().forbidden();

module.exports.removeOptions = Joi.any().forbidden();
