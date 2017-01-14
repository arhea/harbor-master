'use strict';

const EventEmitter = require('events');
const request      = require('request');
const _            = require('lodash');

class Modem {

  constructor(options) {

    const defaults = {
      host: null,
      socket: null,
      version: '1.24',
      tls: {
        ca: null,
        cert: null,
        key: null,
        passphrase: null
      }
    };

    this.opts = _.defaults(options, defaults);
  }

  get(path, params, headers) {
    return this._http('GET', path, params, null, headers);
  }

  post(path, params, body, headers) {
    return this._http('POST', path, params, body, headers);
  }

  put(path, params, body, headers) {
    return this._http('PUT', path, params, body, headers);
  }

  destroy(path, params, body, headers) {
    return this._http('DELETE', path, params, body, headers);
  }

  stream(method, path, params, headers) {
    const dest = new EventEmitter();

    const src = this._request(method, path, params, headers);

    src.on('data', function(chunk) {
      const payload = chunk.toString('utf-8', 8);
      dest.emit('data', payload);
    });

    src.on('error', function(err) {
      dest.emit('error', err);
    });

    src.on('end', function(err) {
      dest.emit('end', err);
    });

    return dest;
  }

  download(method, path, params, headers) {
    return this._request(method, path, params, headers);
  }

  upload(method, path, params, headers) {
    return this._request(method, path, params, headers);
  }

  _http(method, path, params, body, headers) {
    const self = this;

    return new Promise((resolve, reject) => {

      self._request(method, path, params, body, headers, (err, resp, body) => {
        if(err || resp.statusCode !== 200) {
          reject({ error: err, response: resp, body: body });
        } else {
          resolve(body);
        }
      });

    });

  }

  _request(method, path, params, body, headers, cb) {

    const options = {
      method: method.toUpperCase(),
      url: this.url(path),
      headers: headers || {}
    };

    if(params) {
      options.qs = params;
    }

    if(options.method !== 'GET') {
      options.body = body;
      options.json = true;
    }

    if(this.isSecure()) {
      options.ca = this.options.ca;
      options.cert = this.options.cert;
      options.key = this.options.key;
      options.passphrase = this.options.passphrase;
    }

    if(this.isSocket()) {
      options.headers.host = 'http';
    }

    return request(options, cb);
  }

  url(path) {
    const protocol = this.opts.tls.cert !== null ? 'https' : 'http';
    let url = protocol + '://';

    if(this.isSocket()) {
      url = url + 'unix:' + this.opts.socket + ':';
    } else {
      url = url + this.opts.host;
    }

    url = url + path;

    return url;
  }

  isSecure() {
    return this.opts.tls.cert !== null;
  }

  isSocket() {
    return this.opts.socket !== null;
  }

}

module.exports.Client = function(options) {
  return new Modem(options);
};
