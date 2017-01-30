'use strict';

const Joi = require('joi');

module.exports.leave = {
  options: Joi.object().keys({
    force: Joi.boolean().default(false)
  })
};

module.exports.join = {
  options: Joi.object()
};

module.exports.init = {
  options: Joi.object()
};

module.exports.inspect = {
  options: Joi.object()
};

module.exports.update = {
  options: Joi.object().keys({
    version: Joi.string().required(),
    rotateManagerToken: Joi.boolean().default(false),
    rotateWorkerToken: Joi.boolean().default(false)
  })
};

module.exports.unlockKey = {
  options: Joi.object()
};

module.exports.unlock = {
  options: Joi.object()
};
