import * as Joi from 'joi';

export const auth = {
  options: Joi.object().keys({
    username: Joi.string().optional(),
    password: Joi.string().optional(),
    email: Joi.string().email().optional(),
    serveraddress: Joi.string().uri().optional(),
    identitytoken: Joi.string().optional()
  })
};

export const events = {
  options: Joi.object().keys({
    since: Joi.number(),
    until: Joi.number(),
    filters: Joi.object(),
  })
};
