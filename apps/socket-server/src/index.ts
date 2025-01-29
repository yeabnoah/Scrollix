import { WebSocketServer, WebSocket } from "ws";

const io = new WebSocketServer({ port: 4000 });

io.on("connection", (socket: WebSocket) => {
  console.log("New client connected");

  socket.on("message", (message) => {
    const text = message.toString();
    console.log("Received:", text);

    socket.send(`Server received: ${text}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:4000");
