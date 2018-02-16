import { DockerClient } from "../lib/docker";

const client = new DockerClient({
  socket: '/var/run/docker.sock'
});

client.info().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});

client.swarm().inspect().then((info) => {
  console.log(info);
}).catch((err) => {
  console.error(err);
});
