import axios from "axios";
import Navbar from "./Navbar";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";

function Messege() {
  // Sample Messages for User 1
  const user1Messages = [
    { sender: "User 1", text: "Hello, how are you?" },
    { sender: "User 1", text: "I was wondering about the product features." },
    { sender: "User 1", text: "Could you provide more details on that?" },
    { sender: "User 1", text: "Hello, how are you?" },
    { sender: "User 1", text: "I was wondering about the product features." },
    { sender: "User 1", text: "Could you provide more details on that?" },
    { sender: "User 1", text: "Hello, how are you?" },
    { sender: "User 1", text: "I was wondering about the product features." },
    { sender: "User 1", text: "Could you provide more details on that?" },
    { sender: "User 1", text: "Hello, how are you?" },
    { sender: "User 1", text: "I was wondering about the product features." },
    { sender: "User 1", text: "Could you provide more details on that?" },
    { sender: "User 1", text: "Hello, how are you?" },
    { sender: "User 1", text: "I was wondering about the product features." },
    { sender: "User 1", text: "Could you provide more details on that?" },
  ];

  // Sample Messages for User 2
  const user2Messages = [
    { sender: "User 2", text: "Hi! I'm doing great, thanks for asking!" },
    { sender: "User 2", text: "Sure! Our product has several key features..." },
    { sender: "User 2", text: "I would be happy to explain them to you." },
    { sender: "User 2", text: "Hi! I'm doing great, thanks for asking!" },
    { sender: "User 2", text: "Sure! Our product has several key features..." },
    { sender: "User 2", text: "I would be happy to explain them to you." },
  ];
  function handleChat() {
    alert("clicked");
  }
  return (
    <>
      <Navbar currentPage="message" />
      <div className="h-screen grid sm:grid-cols-4 gap-1 m-1">
        <aside className="sm:hidden col-span-1 bg-zinc-800 p-3 overflow-auto">
          {user1Messages.map((user) => (
            <div
              key={user.sender}
              className="flex items-center bg-slate-600 p-1 my-1 rounded-md"
              onClick={handleChat}
            >
              <div className="avatar online placeholder mx-3 ">
                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                  <span className="text-xl">{user.sender}</span>
                </div>
              </div>
              <span className="text-xl">Amit</span>
            </div>
          ))}
        </aside>
        <aside className="col-span-1 max-sm:hidden bg-zinc-800 p-3 overflow-auto">
          {user1Messages.map((user) => (
            <div
              key={user.sender}
              className="flex items-center bg-slate-600 p-1 my-1 rounded-md"
            >
              <div className="avatar online placeholder mx-3 ">
                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                  <span className="text-xl">{user.sender}</span>
                </div>
              </div>
              <span className="text-xl">Amit</span>
            </div>
          ))}
        </aside>
        <div className="col-span-3 overflow-auto m-1 max-sm:hidden">
          <div className="bg-zinc-900 p-1 rounded-md shadow-lg">
            {/* Chat Messages */}
            {user1Messages.map((messages) => {
              return (
                <div className="chat chat-start" key={messages.sender}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Amit
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble">{messages.text}</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
              );
            })}
            {user2Messages.map((messages) => {
              return (
                <div className="chat chat-end" key={messages.sender}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble">{messages.text}</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
              );
            })}

            {/* Input Field for Sending Messages */}
            <div className="flex">
              <input
                type="text"
                className="w-full p-3 outline-none rounded-lg border border-zinc-700"
                placeholder="Type a message..."
              />
              <button className="rounded-md bg-stone-950 p-2 mx-1">
                <VscSend className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Messege;
