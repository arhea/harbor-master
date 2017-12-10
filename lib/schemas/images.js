'use strict';

const Joi = require('joi');

module.exports.list = {
  options: Joi.object().keys({
    all: Joi.boolean().default(false),
    digest: Joi.boolean().default(false),
    filters: Joi.object()
  })
};

module.exports.build = {
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

module.exports.create = {
  options: Joi.object().keys({
    fromImage: Joi.string().required(),
    fromSrc: Joi.array(),
    repo: Joi.string(),
    q: Joi.string(),
    tag: Joi.string()
  })
};

module.exports.push = {
  options: Joi.object().keys({
    tag: Joi.string()
  })
};

module.exports.inspect = {
  options: Joi.object()
};

module.exports.tag = {
  options: Joi.object().keys({
    repo: Joi.string(),
    tag: Joi.string(),
  })
};

module.exports.remove = {
  options: Joi.object().keys({
    force: Joi.boolean().default(false),
    noprune: Joi.boolean().default(false),
  })
};

module.exports.search = {
  options: Joi.object().keys({
    term: Joi.string().required(),
    limit: Joi.number(),
    filters: Joi.object(),
  })
};

module.exports.prune = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};

module.exports.commit = {
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
