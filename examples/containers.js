'use strict';

const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.containers().list().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
