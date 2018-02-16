import * as Joi from 'joi';

export const list = {
  options: Joi.object()
};

export const install = {
  options:  Joi.object().keys({
    name: Joi.string().required()
  })
};

export const inspect = {
  options: Joi.object()
};

export const enable = {
  options: Joi.object()
};

export const disable = {
  options: Joi.object()
};

export const upgrade = {
  options: Joi.object().keys({
    remote: Joi.string().required()
  })
};

export const remove = {
  options: Joi.object()
};
