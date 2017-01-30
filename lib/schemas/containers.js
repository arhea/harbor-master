'use strict';

const Joi = require('joi');

module.exports.list = {
  options: Joi.object().keys({
    all: Joi.boolean().default(false),
    limit: Joi.number(),
    since: Joi.string(),
    before: Joi.string(),
    size: Joi.boolean().default(false),
    filters: Joi.object()
  })
};

module.exports.create = {
  options: Joi.object().keys({
    name: Joi.string()
  })
};

module.exports.inspect = {
  options: Joi.object().keys({
    size: Joi.boolean().default(false)
  })
};

module.exports.top = {
  options: Joi.object().keys({
    /* jshint ignore:start */
    ps_args: Joi.string().default('-ef')
    /* jshint ignore:end */
  })
};

module.exports.logs = {
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

module.exports.change = {
  options: Joi.object()
};

module.exports.export = {
  options: Joi.object()
};

module.exports.stats = {
  options: Joi.object().keys({
    stream: Joi.boolean().default(true)
  })
};

module.exports.resize = {
  options: Joi.object().keys({
    h: Joi.number().required(),
    w: Joi.number().required()
  })
};

module.exports.start = {
  options: Joi.object().keys({
    detachKeys: Joi.string()
  })
};

module.exports.stop = {
  options: Joi.object().keys({
    t: Joi.number().min(0)
  })
};

module.exports.restart = {
  options: Joi.object().keys({
    t: Joi.number().min(0)
  })
};

module.exports.kill = {
  options: Joi.object().keys({
    signal: Joi.string()
  })
};

module.exports.update = {
  options: Joi.object()
};

module.exports.rename = {
  options: Joi.object().keys({
    name: Joi.string().required()
  })
};

module.exports.pause = {
  options: Joi.object()
};

module.exports.unpause = {
  options: Joi.object()
};

module.exports.attach = {
  options: Joi.object().keys({
    detachKeys: Joi.string(),
    logs: Joi.boolean().default(false),
    stream: Joi.boolean().default(false),
    stdin: Joi.boolean().default(false),
    stdout: Joi.boolean().default(false),
    stderr: Joi.boolean().default(false)
  })
};

module.exports.wait = {
  options: Joi.object()
};

module.exports.remove = {
  options: Joi.object().keys({
    v: Joi.boolean().default(false),
    force: Joi.boolean().default(false)
  })
};

module.exports.archive = {
  options: Joi.object().keys({
    path: Joi.string().required()
  })
};

module.exports.update = {
  options: Joi.object().keys({
    path: Joi.string().required(),
    noOverwriteDirNonDir: Joi.boolean().default(false)
  })
};

module.exports.prune = {
  options: Joi.object().keys({
    filters: Joi.object()
  })
};
