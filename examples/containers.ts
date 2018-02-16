import { DockerClient } from "../lib/docker";

const client = new DockerClient({
  socket: '/var/run/docker.sock'
});

client.containers().list().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
