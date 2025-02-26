import { useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { useChatStore } from "../store/ChatStore";
import { useAuthStore } from "../store/AuthStore";
import axiosInstance from "../lib/axiosInstance";

function ChatContent() {
  const [sendMessage, setSendMessages] = useState("");
  const [messages, setMessages] = useState([]);
  const { selectedUser, sendMessages } = useChatStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    async function fetchMessages() {
      const response = await axiosInstance.get(`chat/${selectedUser.id}`);
      if (response) {
        setMessages(response.data.messages);
      }
    }
    fetchMessages();
  }, [sendMessages, selectedUser]);

  function setSendMessage(event) {
    const message = event.target.value;
    setSendMessages(message);
  }
  function handleSendMessages() {
    sendMessages(selectedUser.id, sendMessage);
    setSendMessages("");
  }

  return (
    <div className="bg-zinc-900 h-screen overflow-y-auto rounded-md shadow-lg p-3">
      {/* /!* Chat Messages *! */}
      {messages.map((message) => {
        console.log(message.sender === authUser.id);
        const selfSender = message.sender === authUser.id;
        return (
          <div
            key={message._id}
            className={`chat ${selfSender ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-image avatar">
              <div className="size-14 rounded-full border border-zinc-700">
                {/* <img src={message.sender === authUser.id} alt="" /> */}
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className=""></time>
            </div>
            <div className="chat-bubble flex">{message.message}</div>
          </div>
        );
      })}

      <div className="flex">
        <input
          type="text"
          className="w-full p-3 outline-none rounded-lg border border-zinc-700"
          placeholder="Type a message..."
          onChange={setSendMessage}
          value={sendMessage}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSendMessages();
            }
          }}
        />
        <button
          className="rounded-md bg-stone-950 p-2 mx-1"
          onClick={handleSendMessages}
        >
          <VscSend className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default ChatContent;
