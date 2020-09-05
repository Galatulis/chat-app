import React, { useState } from "react";

import "./MessageInput.css";
import { useSocket } from "../shared/socket";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const socket = useSocket();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("ADD_MESSAGE", message);
      setMessage("");
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className="panel-control" onSubmit={handleSubmit}>
      <input
        className="message-input"
        onChange={handleChange}
        value={message}
        type="text"
      />
      <button className="send-button">Send</button>
    </form>
  );
}
