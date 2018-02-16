import * as Joi from 'joi';

export const list = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

export const create = {
  options: Joi.object()
};

export const update = {
  options: Joi.object().keys({
    version: Joi.string().required()
  })
};

export const log = {
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

export const inspect = {
  options: Joi.object()
};

export const remove = {
  options: Joi.object()
};
