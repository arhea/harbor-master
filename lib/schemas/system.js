'use strict';

const Joi = require('joi');

module.exports.auth = Joi.object().keys({
  username: Joi.string().optional(),
  password: Joi.string().optional(),
  email: Joi.string().email().optional(),
  serveraddress: Joi.string().uri({ allowRelative: true }).optional(),
  identitytoken: Joi.string().optional()
});

module.exports.events = {
  options: Joi.object().keys({
    since: Joi.number(),
    until: Joi.number(),
    filters: Joi.object(),
  })
};
