import { json } from "express";
import { authUserRouter } from "./routing/authUser.router.js";
import connectionDatabase from "./config/database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { chatRouter } from "./routing/chat.router.js";
import verifyUser from "./middleware/verifyUser.js";
import cors from "cors";
import { httpserver, app } from "./socket.js";
async function startServer() {
  dotenv.config();

  var corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
  };

  const PORT = process.env.PORT || 3001;

  app.use(json());
  app.use(cookieParser());
  app.use(cors(corsOptions));

  //router middleware

  app.use("/api/auth", authUserRouter);
  app.use("/api/chat", verifyUser, chatRouter);

  await connectionDatabase();
  httpserver.listen(PORT, () => {
    console.log(`Server is started and listening at PORT ${PORT}`);
  });
}

export default startServer;
