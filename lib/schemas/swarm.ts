import * as Joi from 'joi';

export const leave = {
  options: Joi.object().keys({
    force: Joi.boolean().default(false)
  })
};

export const join = {
  options: Joi.object()
};

export const init = {
  options: Joi.object()
};

export const inspect = {
  options: Joi.object()
};

export const update = {
  options: Joi.object().keys({
    version: Joi.string().required(),
    rotateManagerToken: Joi.boolean().default(false),
    rotateWorkerToken: Joi.boolean().default(false)
  })
};

export const unlockKey = {
  options: Joi.object()
};

export const unlock = {
  options: Joi.object()
};
