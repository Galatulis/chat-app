import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./LoginPanel.css";
import { useSocket } from "../shared/socket";
import { toggleLogin } from "./user.action";

export default function LoginPanel() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const socket = useSocket();

  const handleChange = event => {
    setUser(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (user) {
      socket.emit("ADD_USER", user);
      dispatch(toggleLogin());
    }
  };

  return (
    <form className="panel-login" onSubmit={handleSubmit}>
      <input
        className="input-username"
        onChange={handleChange}
        value={user}
        type="text"
      />
      <button className="login-button">Login</button>
    </form>
  );
}
