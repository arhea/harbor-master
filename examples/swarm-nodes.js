'use strict';

const docker = require('../index');
const fs     = require('fs');

const client = docker.Client({
  host: '192.168.99.100',
  port: '2376',
  tls: {
    ca: fs.readFileSync('/Users/alex/.docker/machine/machines/swarm-master/ca.pem'),
    cert: fs.readFileSync('/Users/alex/.docker/machine/machines/swarm-master/cert.pem'),
    key: fs.readFileSync('/Users/alex/.docker/machine/machines/swarm-master/key.pem')
  }
});

/* jshint ignore:start */
const model = {
  'Availability': 'active',
  'Name': 'swarm-worker-1',
  'Role': 'worker',
  'Labels': {
    'foo': 'bar'
  }
};
/* jshint ignore:end */

client.nodes().update('msw94spas1h2613h0q2ncw594', model, { version: 69 }).then(() => {
  console.log('it worked!');
}).catch((err) => {
  console.error(err.body);
});
