const net = require('net');

const server = net.createServer((socket) => {
  // This callback function is executed whenever a client connects
  console.log('Client connected');
 const clientPort = socket.remotePort;
  console.log(`Client port: ${clientPort}`);

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
