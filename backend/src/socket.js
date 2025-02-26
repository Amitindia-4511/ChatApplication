import { log } from "console";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpserver = createServer(app);
const server = new Server(httpserver, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

let socketId = "";

function userSocketId(recieverId) {
  return socketId;
}

server.on("connection", (socket) => {
  console.log("User connected", socket.id);
  console.log(socket.handshake);

  // This is for private chats
  socketId = socket.id;

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

export { httpserver, app, server, userSocketId };
