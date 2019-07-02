import React, { ChangeEvent, useEffect, useCallback } from "react";
import injectSheet, { WithSheet } from "react-jss";
import { useDispatch, useSelector } from "react-redux";

import setupSocket, { socket } from "../services";
import actions from "../actions";
import { StoreState } from "../interfaces";

function MessageInput({ classes }: WithSheet<typeof styles>) {
  const currentMessage = useSelector<StoreState, StoreState["currentMessage"]>(
    state => state.currentMessage
  );
  const currentUser = useSelector<StoreState, StoreState["currentUser"]>(
    state => state.currentUser
  );

  const dispatch = useDispatch();
  const setCurrentMessage = useCallback(
    (payload: string) => dispatch(actions.setCurrentMessage(payload)),
    [dispatch]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.send(
      JSON.stringify({
        payload: {
          author: currentUser,
          text: currentMessage
        },
        type: "ADD_MESSAGE"
      })
    );
    setCurrentMessage("");
  };

  useEffect(() => {
    setupSocket(dispatch, currentUser);

    return () => {};
  }, [dispatch, currentUser]);

  return (
    <form className={classes.PanelControl} onSubmit={handleSubmit}>
      <input
        className={classes.InputMessage}
        onChange={handleChange}
        value={currentMessage}
        type="text"
      />
      <button className={classes.ButtonSend}>Send</button>
    </form>
  );
}

function styles() {
  return {
    ButtonSend: {
      background: "#42b0f4",
      border: "2px solid #42b0f4",
      borderRadius: "0 0 4px 4px",
      color: "#fff",
      fontSize: "18px",
      padding: "5px 0",
      width: "100%"
    },
    InputMessage: {
      background: "#fff",
      border: "0px",
      borderBottom: "1px solid #eee",
      boxSizing: "border-box",
      color: "#555",
      fontSize: "16px",
      padding: "20px 20px",
      width: "100%"
    },
    PanelControl: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      display: "grid",
      gridArea: "control",
      gridTemplateRows: "60% 40%"
    }
  };
}

export default injectSheet(styles)(MessageInput);
