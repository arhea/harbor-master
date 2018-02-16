import * as Joi from 'joi';

export const list = {
  options: Joi.object().keys({
    all: Joi.boolean().default(false),
    digest: Joi.boolean().default(false),
    filters: Joi.object()
  })
};

export const build = {
  options: Joi.object().keys({
    dockerfile: Joi.string().required(),
    t: Joi.array(),
    remote: Joi.string(),
    q: Joi.string(),
    nocache: Joi.boolean(),
    pull: Joi.boolean(),
    rm: Joi.boolean(),
    forcerm: Joi.boolean(),
    memory: Joi.number(),
    memswap: Joi.number(),
    cpushares: Joi.number(),
    cpusetcpus: Joi.number(),
    cpuperiod: Joi.number(),
    cpuquota: Joi.number(),
    buildargs: Joi.object(),
    shmsize: Joi.string(),
    labels: Joi.object(),
  })
};

export const create = {
  options: Joi.object().keys({
    fromImage: Joi.string().required(),
    fromSrc: Joi.array(),
    repo: Joi.string(),
    q: Joi.string(),
    tag: Joi.string()
  })
};

export const history = {
  options: Joi.object()
};

export const push = {
  options: Joi.object().keys({
    tag: Joi.string()
  })
};

export const inspect = {
  options: Joi.object()
};

export const tag = {
  options: Joi.object().keys({
    repo: Joi.string(),
    tag: Joi.string(),
  })
};

export const remove = {
  options: Joi.object().keys({
    force: Joi.boolean().default(false),
    noprune: Joi.boolean().default(false),
  })
};

export const search = {
  options: Joi.object().keys({
    term: Joi.string().required(),
    limit: Joi.number(),
    filters: Joi.object(),
  })
};

export const prune = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

export const commit = {
  options: Joi.object().keys({
    container: Joi.string().required(),
    repo: Joi.string().required(),
    tag: Joi.string(),
    comment: Joi.string(),
    author: Joi.string(),
    pause: Joi.boolean(),
    changes: Joi.string(),
  })
};

export const _export = {
  options: Joi.object()
};
