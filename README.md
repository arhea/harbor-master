# Harbor Master
[![Build Status](https://travis-ci.org/arhea/harbor-master.svg?branch=master)](https://travis-ci.org/arhea/harbor-master)

Harbor Master is a Docker Remote API client written in Node. This client is meant to be a simple wrapper that makes it easy to communicate with your Docker Daemon over the unix socket or http based APIs.

This project is still in active development. This project will be versioned in accordance with the Docker Remote API. For example, if the current Docker Remote API version is `1.24`, Harbor Master's version will be `1.24.x`.

## Examples

```javascript
const docker = require('../index');

const client = docker.Client({
  socket: '/var/run/docker.sock'
});

client.info().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
```


