'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  filters: Joi.object()
});

module.exports.buildOptions = Joi.object().keys({
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
});

module.exports.createOptions = Joi.object().keys({
  fromImage: Joi.string().required(),
  fromSrc: Joi.array(),
  repo: Joi.string(),
  q: Joi.string(),
  tag: Join.string()
});

module.exports.pushOptions = Joi.object().keys({
  tag: Join.string()
});

module.exports.tagOptions = Joi.object().keys({
  repo: Join.string(),
  tag: Join.string(),
});

module.exports.removeOptions = Joi.object().keys({
  force: Join.boolean().default(false),
  noprune: Join.boolean().default(false),
});

module.exports.searchOptions = Joi.object().keys({
  term: Join.string(),
  limit: Join.number(),
  filters: Join.object(),
});
