import { DockerClient } from "../lib/docker";

const client = new DockerClient({
  socket: '/var/run/docker.sock'
});

client.containers().logs('ping', {
  stdout: true, stderr: true, follow: true
}).then((stream) => {

  stream.on('data', (line) => {
    console.log(line);
  });

});
