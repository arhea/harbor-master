import * as Joi from 'joi';

export const list = {
  options: Joi.object().keys({
    all: Joi.boolean().default(false),
    limit: Joi.number(),
    since: Joi.string(),
    before: Joi.string(),
    size: Joi.boolean().default(false),
    filters: Joi.object()
  })
};

export const create = {
  options: Joi.object().keys({
    name: Joi.string()
  })
};

export const inspect = {
  options: Joi.object().keys({
    size: Joi.boolean().default(false)
  })
};

export const top = {
  options: Joi.object().keys({
    /* jshint ignore:start */
    ps_args: Joi.string().default('-ef')
    /* jshint ignore:end */
  })
};

export const logs = {
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

export const changes = {
  options: Joi.object()
};

export const _export = {
  options: Joi.object()
};

export const stats = {
  options: Joi.object().keys({
    stream: Joi.boolean().default(true)
  })
};

export const resize = {
  options: Joi.object().keys({
    h: Joi.number().required(),
    w: Joi.number().required()
  })
};

export const start = {
  options: Joi.object().keys({
    detachKeys: Joi.string()
  })
};

export const stop = {
  options: Joi.object().keys({
    t: Joi.number().min(0)
  })
};

export const restart = {
  options: Joi.object().keys({
    t: Joi.number().min(0)
  })
};

export const kill = {
  options: Joi.object().keys({
    signal: Joi.string()
  })
};

export const upload = {
  options: Joi.object()
};

export const rename = {
  options: Joi.object().keys({
    name: Joi.string().required()
  })
};

export const pause = {
  options: Joi.object()
};

export const unpause = {
  options: Joi.object()
};

export const attach = {
  options: Joi.object().keys({
    detachKeys: Joi.string(),
    logs: Joi.boolean().default(false),
    stream: Joi.boolean().default(false),
    stdin: Joi.boolean().default(false),
    stdout: Joi.boolean().default(false),
    stderr: Joi.boolean().default(false)
  })
};

export const wait = {
  options: Joi.object()
};

export const remove = {
  options: Joi.object().keys({
    v: Joi.boolean().default(false),
    force: Joi.boolean().default(false)
  })
};

export const archive = {
  options: Joi.object().keys({
    path: Joi.string().required()
  })
};

export const update = {
  options: Joi.object().keys({
    path: Joi.string().required(),
    noOverwriteDirNonDir: Joi.boolean().default(false)
  })
};

export const prune = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};
