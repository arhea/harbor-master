'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.inspectOptions = Joi.any().forbidden();
