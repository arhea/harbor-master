'use strict';

const Joi = require('joi');

module.exports.list = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

module.exports.create = {
  options: Joi.object()
};

module.exports.update = {
  options: Joi.object().keys({
    version: Joi.string().required()
  })
};

module.exports.log = {
  options: Joi.object().keys({
    details: Joi.boolean().default(false),
    follow: Joi.boolean().default(false),
    stdout: Joi.boolean().default(false),
    stderr: Joi.boolean().default(false),
    since: Joi.number().default(0),
    timestamps: Joi.boolean().default(false),
    tail: Joi.any().default('all')
  })
};

module.exports.inspect = {
  options: Joi.object()
};

module.exports.remove = {
  options: Joi.object()
};
