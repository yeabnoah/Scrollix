import { WebSocketServer, WebSocket } from "ws";

const io = new WebSocketServer({ port: 4000 });

io.on("connection", (socket: WebSocket) => {
  console.log("user connected to socket server");

  socket.on("message", (message) => {
    console.log("user sent message:", message.toString());
  });
});

console.log("socket server is running on ws://localhost:5000");
