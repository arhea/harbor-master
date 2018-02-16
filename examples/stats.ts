import { DockerClient } from "../lib/docker";

const client = new DockerClient({
  socket: '/var/run/docker.sock'
});

client.containers().stats('ping').then((emitter) => {
  emitter.on('data', (data) => {

    data = JSON.parse(data);
    //console.log(data);

    /* jshint ignore:start */
    if (data && data.memory_stats) {
      const mem = (data.memory_stats.usage / Math.pow(1024, 2)) * Number((Math.pow(2, 20) / Math.pow(10, 6)).toFixed(2));
      const memUsage = ((data.memory_stats.usage / data.memory_stats.limit) * 100).toFixed(2);

      let cpuPercent: any = (data.cpu_stats.cpu_usage.total_usage / data.cpu_stats.system_cpu_usage);
      cpuPercent = cpuPercent * data.cpu_stats.cpu_usage.percpu_usage.length * 100;
      cpuPercent = cpuPercent.toFixed(2);

      const networkIn = (data.networks.eth0.rx_bytes / 1024 / 1024).toFixed(3);
      const networkOut = (data.networks.eth0.tx_bytes / 1024 / 1024).toFixed(3);

      console.log('Memory Usage:', mem + 'MB', memUsage + '%');
      console.log('CPU Usage:', cpuPercent + '%');
      console.log('Network Usage:', networkIn + 'MB / ' + networkOut + 'MB');
    }
    /* jshint ignore:end */

  });
});
