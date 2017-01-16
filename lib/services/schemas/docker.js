'use strict';

const Joi = require('joi');

module.exports.authOptions = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
  serveraddress: Joi.string().uri()
});

module.exports.commitOptions = Joi.object().keys({
  container: Joi.string().required(),
  repo: Joi.string().required(),
  tag: Joi.string(),
  comment: Joi.string(),
  author: Joi.string(),
  pause: Joi.boolean(),
  changes: Joi.string(),
});

module.exports.eventOptions = Joi.object().keys({
  since: Joi.number(),
  until: Joi.number(),
  filters: Joi.object(),
});
