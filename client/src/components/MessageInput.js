import React, { useEffect, useCallback } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";

import { setupSocket, socket } from "../services";
import * as actions from "../actions";

const useStyles = createUseStyles(styles());

function MessageInput() {
  const classes = useStyles();

  const currentMessage = useSelector(state => state.message.currentMessage);
  const currentUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();
  const setCurrentMessage = useCallback(
    payload => dispatch(actions.setCurrentMessage(payload)),
    [dispatch]
  );

  const handleChange = event => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    socket.send(
      JSON.stringify({
        payload: {
          author: currentUser,
          text: currentMessage,
        },
        type: "ADD_MESSAGE",
      })
    );
    setCurrentMessage("");
  };

  useEffect(() => {
    setupSocket(dispatch, currentUser);
  }, [dispatch, currentUser]);

  return (
    <form className={classes.panelControl} onSubmit={handleSubmit}>
      <input
        className={classes.inputMessage}
        onChange={handleChange}
        value={currentMessage}
        type="text"
      />
      <button className={classes.buttonSend}>Send</button>
    </form>
  );
}

function styles() {
  return {
    buttonSend: {
      background: "#42b0f4",
      border: "2px solid #42b0f4",
      borderRadius: "0 0 4px 4px",
      color: "#fff",
      fontSize: "18px",
      padding: "5px 0",
      width: "100%",
    },
    inputMessage: {
      background: "#fff",
      border: "0px",
      color: "#555",
      fontSize: "16px",
      padding: "20px 20px",
      width: "100%",
    },
    panelControl: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      display: "grid",
      gridArea: "control",
      gridTemplateRows: "60% 40%",
    },
  };
}

export default MessageInput;
