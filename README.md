# Harbor Master
[![Build Status](https://travis-ci.org/arhea/harbor-master.svg?branch=master)](https://travis-ci.org/arhea/harbor-master)

[![NPM](https://nodei.co/npm/harbor-master.png?downloads=true&downloadRank=true)](https://nodei.co/npm/harbor-master/)
[![NPM](https://nodei.co/npm-dl/harbor-master.png?months=6&height=3)](https://nodei.co/npm/harbor-master/)

Harbor Master is a Docker Remote API client written in Node. This client is meant to be a simple wrapper that makes it easy to communicate with your Docker Daemon over the unix socket or http based APIs.

This project is still in active development. This project will be versioned in accordance with the Docker Remote API. For example, if the current Docker Remote API version is `1.24`, Harbor Master's version will be `1.24.x`.

## Examples

### Unix Socket Example
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

### Remote Host Example
```javascript
const docker = require('../index');

const client = docker.Client({
  host: 'swarm.example.com',
  port: '2375'
});

client.info().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
```

### SSL Configuration
```javascript
const docker = require('../index');

const client = docker.Client({
  host: 'swarm.example.com',
  port: '2376',
  tls: {
    ca: fs.readFileSync('ca.pem'),
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
    passphrase: 'supersecretpass'
  }
});

client.info().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
```

## API Documentation

### Containers

#### `client.containers().list(options)` - List Containers
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-containers)
- `options`
  + `all` - *default: `false`* Show all containers. Only running containers are shown by default.
  + `limit` - Show limit last created containers, include non-running ones.
  + `since` -  Show only containers created since Id, include non-running ones.
  + `before` - Show only containers created before Id, include non-running ones.
  + `size` - *default: `false`* Show the containers sizes
  + `filters` - `map[string][]string` to process on the containers list

#### `client.containers().create(model, options)` - Create Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-a-container)
- `model` - the JSON model that the Docker API consumes
- `options`
  + `name` - Assign the specified name to the container. Must match `/?[a-zA-Z0-9_-]+`.

#### `client.containers().inspect(name, options)` - Inspect Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-a-container)
- `name` - the name or id of the container
- `options`
  + `size` - *default: `false`* Show the containers sizes

#### `client.containers().top(name)` - List Processes Running Inside a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-processes-running-inside-a-container)
- `name` - the name or id of the container
- `options`
  + `ps_args` - `ps` arguments to use (e.g., aux), defaults to `-ef`

#### `client.containers().logs(name, options)` - Container Logs
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/get-container-logs)
- `name` - the name or id of the container
- `options`
  + `details` - Show extra details provided to logs. *default: `false`*
  + `follow` - return stream. *default: `false`*
  + `stdout` - show stdout log. *default: `false`*
  + `stderr` - show stderr log. *default: `false`*
  + `since` - Specifying a timestamp will only output log-entries since that timestamp. *default: `false`*
  + `timestamps` - print timestamps for every log line *default: `false`*
  + `tail` - Output specified number of lines at the end of logs: all or <number> *default: `all`*

#### `client.containers().changes(name, options)` - Inspect Container Filesystem Changes
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-changes-on-a-containers-filesystem)
- `name` - the name or id of the container
- `options`

#### `client.containers().export(name, options)` - Export a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/export-a-container)
- `name` - the name or id of the container
- `options`

#### `client.containers().stats(name, options)` - Export a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/get-container-stats-based-on-resource-usage)
- `name` - the name or id of the container
- `options`
  + `stream` - stream statistics *default: `true`*

#### `client.containers().resize(name, options)` - Resize a container TTY
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/resize-a-container-tty)
- `name` - the name or id of the container
- `options`
  + `h` - height
  + `w` - width

#### `client.containers().start(name, options)` - Start a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/start-a-container)
- `name` - the name or id of the container
- `options`
  + `detachKeys` - Override the key sequence for detaching a container. Format is a single character.

#### `client.containers().start(name, options)` - Stop a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/stop-a-container)
- `name` - the name or id of the container
- `options`
  + `t` - number of seconds to wait before killing the container

#### `client.containers().start(name, options)` - Restart a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/restart-a-container)
- `name` - the name or id of the container
- `options`
  + `t` - number of seconds to wait before killing the container

#### `client.containers().kill(name, options)` - Kill a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/kill-a-container)
- `name` - the name or id of the container
- `options`
  + `signal` - Signal to send to the container: integer or string like SIGINT. When not set, SIGKILL is assumed and the call waits for the container to exit.

#### `client.containers().update(name, model, options)` - Update a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/update-a-container)
- `name` - the name or id of the container
- `model` - the JSON model that the Docker API consumes
- `options`

#### `client.containers().rename(name, options)` - Rename a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/rename-a-container)
- `name` - the name or id of the container
- `options`
  + `name` - new name for the container

#### `client.containers().pause(name)` - Pause a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/pause-a-container)
- `name` - the name or id of the container
- `options`

#### `client.containers().unpause(name)` - Unpause a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/unpause-a-container)
- `name` - the name or id of the container
- `options`

#### `client.containers().attach(name, options)` - Attach a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/attach-to-a-container)
- `name` - the name or id of the container
- `options`
  + `detachKeys` - Override the key sequence for detaching a container. Format is a single character
  + `logs` - return logs *default: `false`*
  + `stream` - return stream *default: `false`*
  + `stdin` - return stdin *default: `false`*
  + `stdout` - return stdout *default: `false`*
  + `stderr` - return stderr *default: `false`*

#### `client.containers().unpause(name, options)` - Wait a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/wait-a-container)
- `name` - the name or id of the container
- `options`

#### `client.containers().remove(name, options)` - Wait a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-a-container)
- `name` - the name or id of the container
- `options`
  + `v` - Remove the volumes associated to the container *default: `false`*
  + `force` - Kill then remove the container *default: `false`*

### Images

#### `client.images().list(options)` - Wait a Container
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-images)
- `options`
  + `filters` - `map[string][]string` to process on the images list

#### `client.images().build(stream, options, registryAuth)` - Build an Image From a Dockerfile
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/build-image-from-a-dockerfile)
- `options`
  +
- `registryAuth`
  + `username`
  + `password`
  + `serveraddress`

#### `client.images().create(options, registryAuth)` - Create Image
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-an-image)
- `options`
  + `fromImage`
  + `fromSrc`
  + `repo`
  + `q`
  + `tag`
- `registryAuth`
  + `username`
  + `password`
  + `serveraddress`

#### `client.images().inspect(name, options)` - Inspect an Image
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-an-image)
- `name` - the name or id of the image
- `options`

#### `client.images().history(name, options)` - History of an Image
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/get-the-history-of-an-image)
- `name` - the name or id of the image
- `options`

#### `client.images().push(name, options, registryAuth)` - Push an Image on the Registry
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/get-the-history-of-an-image)
- `name` - the name or id of the image
- `options`
  + `tag`
- `registryAuth`
  + `username`
  + `password`
  + `serveraddress`

#### `client.images().tag(name, options)` - Tag an Image
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/tag-an-image-into-a-repository)
- `name` - the name or id of the image
- `options`
  + `repo`
  + `tag`

#### `client.images().remove(name, options)` - Remove of Image
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-an-image)
- `name` - the name or id of the image
- `options`
  + `repo`
  + `tag`

#### `client.images().search(options)` - Search Images
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/search-images)
- `name` - the name or id of the image
- `options`
  + `term`
  + `limit`
  + `filters`

### Networks

#### `client.networks().list(options)` - List Networks
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-networks)
- `options`
  + `filters` - JSON encoded network list filter.

#### `client.networks().create(model, options)` - Create a Network
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-a-network)
- `model` - a json model representing the network
- `options`

#### `client.networks().inspect(id, options)` - Inspect a Network
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-network)
- `id` - the network id or name
- `options`

#### `client.networks().remove(id, options)` - Remove a Network
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-a-network)
- `id` - the network id or name
- `options`

#### `client.networks().connect(id, options)` - Connect a Container to a Network
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/connect-a-container-to-a-network)
- `id` - the network id or name
- `options`

#### `client.networks().disconnect(id, options)` - Disconnect a Container to a Network
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/disconnect-a-container-from-a-network)
- `id` - the network id or name
- `options`

### Nodes

#### `client.nodes().list(options)` - List Nodes
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-nodes)
- `id` - the node id
- `options`
  + `filters` - JSON encoded node list filter.

#### `client.nodes().inspect(id, options)` - Inspect a Node
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-a-node)
- `id` - the node id
- `options`

#### `client.nodes().remove(id, options)` - Remove a Node
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-a-node)
- `id` - the node id
- `options`

#### `client.nodes().update(id, options)` - Update A Node
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/update-a-node)
- `id` - the node id
- `options`
  + `version` - The version number of the node object being updated. This is required to avoid conflicting writes.

### Plugins
Coming Soon...

### Services

#### `client.services().list(options)` - List Services
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-services)
- `options`
  + `filters` - a JSON encoded value of the filters (a map[string][]string) to process on the services list.

#### `client.services().create(options, registryAuth)` - Create a Service
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/create-a-service)
- `options`

#### `client.services().remove(id, options)` - Remove a Service
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/remove-a-service)
- `options`

#### `client.services().inspect(id, options)` - Inspect a Service
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-one-or-more-services)
- `options`

#### `client.services().update(id, options, registryAuth)` - Update a Service
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/update-a-service)
- `options`
  + `version` - The version number of the service object being updated. This is required to avoid conflicting writes.


### Swarm

#### `client.swarm().info(options)` - Swarm Info
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/swarm)
- `options`

#### `client.swarm().init(options)` - Initialize a Swarm
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/initialize-a-new-swarm)
- `options`

#### `client.swarm().join(options)` - Join a Swarm
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/join-an-existing-swarm)
- `options`

#### `client.swarm().leave(options)` - Leave a Swarm
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/join-an-existing-swarm)
- `options`
  + `force` - Boolean (false/true). Force leave swarm, even if this is the last manager or that it will break the cluster.

#### `client.swarm().update(options)` - Update a Swarm
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/update-a-swarm)
- `options`
  + `version` - The version number of the swarm object being updated. This is required to avoid conflicting writes.
  + `rotateWorkerToken` - Set to true to rotate the worker join token.
  + `rotateManagerToken` - Set to true to rotate the manager join token.

### Tasks

#### `client.tasks().list(options)` - List Services
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/list-tasks)
- `options`
  + `filters` - a JSON encoded value of the filters (a map[string][]string) to process on the tasks list.

#### `client.tasks().inspect(id, options)` - Inspect a Task
- [Docker Documentation](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/inspect-one-or-more-services)
- `options`

### Volumes
Coming Soon...

### Daemon
Coming Soon...


