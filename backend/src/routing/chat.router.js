import { Router } from "express";
import chat from "../controller/chat/chat.controller.js";

const chatRouter = Router();

chatRouter.post('/:recieverId',chat);

export {chatRouter};