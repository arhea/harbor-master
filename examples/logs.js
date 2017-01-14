'use strict';

const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.containers().logs('ping', { stdout: true, stdout: true, follow: true }).on('data', (chunk) => {

  const payload = chunk.toString('utf-8', 8);
  console.log(payload);

}).on('error', (err) => {
  console.error(err);
});
