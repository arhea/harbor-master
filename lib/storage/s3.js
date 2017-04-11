'use strict';

const Promise = require('bluebird');
const _       = require('lodash');
const AWS     = require('aws-sdk');

module.exports.load = function load(options) {

  const ca = parse(options.ca);
  const key = parse(options.key);
  const cert = parse(options.cert);

  const requests = _.map([ca, key, cert], fetch);

  return Promise.all(requests).then(function(resps) {
    return {
      ca: resps[0],
      key: resps[1],
      cert: resps[2]
    };
  });

};

module.exports.fetch = function fetch(options) {

  const s3 = new AWS.S3();

  return new Promise(function(resolve, reject) {

    s3.getObject(options, function(err, data) {

      if(!err) {
        reject(err);
      } else {
        resolve(new Buffer(data.Body).toString('utf8'));
      }

    });

  });

};

module.exports.match = function match() {
  return _.startsWith(path, 's3://');
};

module.exports.parse = function parse(path) {
  // remove the s3://
  path = path.replace(path, 's3://');

  const result = {
    Bucket: '',
    Key: ''
  };

  // get the name of the bucket
  reslult.Bucket = _.split(path, '/', 1);

  // get the key name
  reslult.Key = _.split(path.replace(reslult.bucket, ''), '/');

  return result;
};
