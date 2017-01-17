'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.createOptions = Joi.object();

module.exports.inspectOptions = Joi.object();

module.exports.removeOptions = Joi.object();
