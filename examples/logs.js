'use strict';

const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.containers().logs('ping', {
  stdout: true, stderr: true, follow: true
}).then((stream) => {

  stream.on('data', (line) => {
    console.log(line);
  });

});
