import { log } from "console";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpserver = createServer(app);
const io = new Server(httpserver, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const socketUserMap = {};

function userSocketId(recieverId) {
  // console.log("Fetching socket ID for user:", recieverId);
  // console.log("Current socketUserMap:", socketUserMap);
  return socketUserMap[recieverId];
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  socketUserMap[userId] = socket.id;

  // console.log("Socket Id", socket.id);
  // console.log("userId", userId);
  // console.log("SocketMap", socketUserMap);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

export { httpserver, app, io, userSocketId };
