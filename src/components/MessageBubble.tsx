import React from "react";
import { Message } from "../types/chat";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-xs lg:max-w-md xl:max-w-lg ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white ${
            isUser ? "bg-blue-500 ml-2" : "bg-gray-500 mr-2"
          }`}
        >
          {isUser ? "You" : "AI"}
        </div>
        <div
          className={`px-4 py-2 rounded-lg ${
            isUser
              ? "bg-blue-500 text-white rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          <div
            className={`text-xs mt-1 opacity-70 ${
              isUser ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
