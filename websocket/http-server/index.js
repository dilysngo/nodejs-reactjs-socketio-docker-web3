const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(8000);
console.log('Server listening on port 8000');

const wsServer = new webSocketServer({
  httpServer: server
})

const clients = {};

const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random() * 0x10000)).toString().substring(1);
  return s4() + s4() + '-' + s4();
}

wsServer.on('request', function (req) {
  const userID = getUniqueID();
  console.log(new Date() + ' Received a new connection from origin '  + req.origin + '.');

  const connection = req.accept(null, req.origin);
  clients[userID] = connection;

  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

  connection.on('message', (message) => {
    if(message.type = 'utf8') {
      console.log('Received Message', message.utf8Data);

      for (key in clients) {
        clients[key].sendUTF(message.utf8Data);
        console.log('Send message to: ', clients[key]);
      }
    }
  })
})