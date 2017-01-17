'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object();

module.exports.installOptions = Joi.object().keys({
  name: Joi.string().required()
});

module.exports.inspectOptions = Joi.object();

module.exports.enableOptions = Joi.object();

module.exports.disableOptions = Joi.object();

module.exports.removeOptions = Joi.object();
