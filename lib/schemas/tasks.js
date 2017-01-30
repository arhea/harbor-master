'use strict';

const Joi = require('joi');

module.exports.list = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

module.exports.inspect = {
  options: Joi.object()
};
