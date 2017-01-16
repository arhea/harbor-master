'use strict';

const Joi = require('joi');

module.exports.listOptions = Joi.object().keys({
  all: Joi.boolean().default(false),
  limit: Joi.number(),
  since: Joi.string(),
  before: Joi.string(),
  size: Joi.boolean().default(false),
  filters: Joi.object()
});

module.exports.createOptions = Joi.object().keys({
  name: Joi.string()
});

module.exports.inspectOptions = Joi.object().keys({
  size: Joi.boolean().default(false)
});

module.exports.topOptions = Joi.object().keys({
  /* jshint ignore:start */
  ps_args: Joi.string().default('-ef')
  /* jshint ignore:end */
});

module.exports.logsOptions = Joi.object().keys({
  details: Joi.boolean().default(false),
  follow: Joi.boolean().default(false),
  stdout: Joi.boolean().default(false),
  stderr: Joi.boolean().default(false),
  since: Joi.number().default(0),
  timestamps: Joi.boolean().default(false),
  tail: Joi.any().default('all')
});

module.exports.changesOptions = Joi.any().forbidden();

module.exports.exportOptions = Joi.any().forbidden();

module.exports.statsOptions = Joi.object().keys({
  stream: Joi.boolean().default(true)
});

module.exports.resizeOptions = Joi.object().keys({
  h: Joi.number().required(),
  w: Joi.number().required()
});

module.exports.startOptions = Joi.object().keys({
  detachKeys: Joi.string()
});

module.exports.stopOptions = Joi.object().keys({
  t: Joi.number().min(0)
});

module.exports.restartOptions = Joi.object().keys({
  t: Joi.number().min(0)
});

module.exports.killOptions = Joi.object().keys({
  signal: Joi.string()
});

module.exports.updateOptions = Joi.any().forbidden();

module.exports.renameOptions = Joi.object().keys({
  name: Joi.string().required()
});

module.exports.pauseOptions = Joi.any().forbidden();

module.exports.unpauseOptions = Joi.any().forbidden();

module.exports.attachOptions = Joi.object().keys({
  detachKeys: Joi.string(),
  logs: Joi.boolean().default(false),
  stream: Joi.boolean().default(false),
  stdin: Joi.boolean().default(false),
  stdout: Joi.boolean().default(false),
  stderr: Joi.boolean().default(false)
});

module.exports.waitOptions = Joi.any().forbidden();

module.exports.removeOptions = Joi.object().keys({
  v: Joi.boolean().default(false),
  force: Joi.boolean().default(false)
});

module.exports.archiveOptions = Joi.object().keys({
  path: Joi.string().required()
});

module.exports.uploadOptions = Joi.object().keys({
  path: Joi.string().required(),
  noOverwriteDirNonDir: Joi.boolean().default(false)
});
