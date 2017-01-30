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

module.exports.update = {
  options: Joi.object().keys({
    version: Joi.string().required()
  })
};

module.exports.remove = {
  options: Joi.object().keys({
    force: Joi.boolean().default(false)
  })
};
