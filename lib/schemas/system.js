'use strict';

const Joi = require('joi');

module.exports.auth = {
  options: Joi.object().keys({
    username: Joi.string(),
    password: Joi.string(),
    email: Joi.string().email(),
    serveraddress: Joi.string().uri()
  })
};

module.exports.events = {
  options: Joi.object().keys({
    since: Joi.number(),
    until: Joi.number(),
    filters: Joi.object(),
  })
};
