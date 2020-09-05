import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import TitleBar from "./TitleBar";
import SideBar from "../users/SideBar";
import LoginPanel from "../users/LoginPanel";
import MessageList from "../messages/MessageList";
import MessageInput from "../messages/MessageInput";
import { useSocket } from "../shared/socket";
import { addMessage, loadMessages } from "../messages/message.action";
import { loadUsers, addUser, removeUser } from "../users/user.action";
import { isLoggedInSelector } from "../users/user.reducer";

export default function App() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    document.title = "Wicara";
  }, []);

  useEffect(() => {
    socket.on("GET_ALL_USER", users => {
      dispatch(loadUsers(users));
    });
    socket.on("ADD_USER", user => {
      dispatch(addUser(user));
    });
    socket.on("REMOVE_USER", user => {
      dispatch(removeUser(user));
    });
    socket.on("GET_ALL_MESSAGE", messages => {
      dispatch(loadMessages(messages));
    });
    socket.on("ADD_MESSAGE", message => {
      dispatch(addMessage(message));
    });
  }, [dispatch, socket]);

  return isLoggedIn ? (
    <div className="grid-container">
      <TitleBar />
      <SideBar />
      <MessageList />
      <MessageInput />
    </div>
  ) : (
    <LoginPanel />
  );
}
