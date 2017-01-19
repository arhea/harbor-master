'use strict';

const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.version().then((version) => {
  console.log(version);
}).catch((err) => {
  console.error(err);
});
