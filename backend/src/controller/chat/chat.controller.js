import { Chat } from "../../model/chat.model.js";
import { Message } from "../../model/message.model.js";
import { server, userSocketId } from "../../socket.js";

async function chat(req, res) {
  try {
    const { message } = req.body;
    const { recieverId } = req.params;
    const senderId = req.body.userId;

    //getting the chat
    let chat = await Chat.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (chat) {
      const newMessage = new Message({
        sender: senderId,
        message: message,
      });
      await newMessage.save();
      chat.messages.push(newMessage._id);
    } else {
      const newMessage = new Message({
        sender: senderId,
        message: message,
      });
      await newMessage.save();
      chat = new Chat({
        participants: [senderId, recieverId],
      });
      chat.messages.push(newMessage._id);
    }
    const response = await chat.save();
    let messages;
    // = await Message.find({
    //   _id: { $in: response.messages },
    // }).select("-_id");

    server.to(userSocketId(recieverId)).emit("message", {
      messages: message,
    });
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log("error while saving chat", error);
    return res
      .status(500)
      .json({ message: "Something went wrong while sending message" });
  }
}

export default chat;
