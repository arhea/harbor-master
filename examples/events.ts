import { DockerClient } from "../lib/docker";

const client = new DockerClient({
  socket: '/var/run/docker.sock'
});

client.events().then((stream) => {

  stream.on('data', (event) => {
    console.log(event);
  });

});
