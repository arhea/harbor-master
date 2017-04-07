'use strict';

const Joi = require('joi');

module.exports.list = {
  options: Joi.object()
};

module.exports.install = {
  options:  Joi.object().keys({
    name: Joi.string().required()
  })
};

module.exports.inspect = {
  options: Joi.object()
};

module.exports.enable = {
  options: Joi.object()
};

module.exports.disable = {
  options: Joi.object()
};

module.exports.upgrade = {
  options: Joi.object().keys({
    remote: Joi.string().required()
  })
};

module.exports.remove = {
  options: Joi.object()
};
