import { Chat } from "../../model/chat.model.js";
import { Message } from "../../model/message.model.js";

async function fetchChat(req, res) {
  try {
    const { recieverId } = req.params;
    const senderId = req.body.userId;
    //getting the chat
    console.log(recieverId);
    console.log(senderId);
    let chat = await Chat.find({
      participants: { $all: [senderId, recieverId] },
    }).populate("messages");
    console.log(chat);

    if (chat) {
      const messages = chat[0].messages;
      messages.forEach((messages) => {
        console.log(messages.message);
        return res.status(200).json({ message: "We got your messages" });
      });
    } else {
      return res
        .status(400)
        .json({ message: "No chat found between these users" });
    }
  } catch (error) {
    console.log("error while fetching chat");
    return res
      .status(500)
      .json({ message: "something went wrong while fetching chats" });
  }
}
export default fetchChat;
