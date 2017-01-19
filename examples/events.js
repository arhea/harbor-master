'use strict';

const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.events().then((stream) => {

  stream.on('data', (event) => {
    console.log(event);
  });

});
