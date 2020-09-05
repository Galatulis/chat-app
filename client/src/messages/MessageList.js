import React from "react";
import { useSelector } from "react-redux";

import "./MessageList.css";
import { messageListSelector } from "./message.reducer";

export default function MessageList() {
  const messageList = useSelector(messageListSelector);

  return (
    <main className="panel-message">
      {messageList.map((message) => (
        <p key={message.id} className="text-message">
          <span className="text-message-author">{message.author.name}</span>
          &nbsp;&#58;&nbsp; {message.text}
        </p>
      ))}
    </main>
  );
}
