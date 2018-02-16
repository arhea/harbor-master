import * as Joi from 'joi';

export const list = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

export const create = {
  options: Joi.object()
};

export const inspect = {
  options: Joi.object()
};

export const update = {
  options: Joi.object().keys({
    version: Joi.string()
  })
};

export const remove = {
  options: Joi.object()
};
