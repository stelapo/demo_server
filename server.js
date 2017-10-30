const Server = require('socket.io')();
const db = require('./db');

Server.on('connection', (socket) => {
  let socketId = socket.id;
  let clientIp = socket.request.connection.remoteAddress;
  let clientPort = socket.request.connection.remotePort;
  console.log("socketId=" + socketId);
  console.log("clientIp=" + clientIp);
  console.log("clientPort=" + clientPort);

  Server.emit('welcome');

  socket.on("after connect", () => {
    console.log("received msg after connect"); // not displayed
    Server.emit("ok");
  })

  socket.on("test 2", () => {
    console.log("received test 2"); // not displayed
    Server.emit("ok");
  })

  socket.on("async ping", () => {
    console.log("received async ping from " + clientIp); // not displayed
    Server.emit("response", "ciao");
  })

});

db.createDbStrucutre();

console.log("Server listening on...")
Server.listen(3000);
