import { Server } from 'uws';

const server = new Server({port: 42004})

server.on('connection', (ws) => {
  console.log(ws);
  ws.on('message', (data) => {
    if (!data.broadcast) {
      return;
    }
    server.clients.forEach(client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    }
  });
});
