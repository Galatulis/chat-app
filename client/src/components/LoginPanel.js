import React, { useCallback, useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";

import * as actions from "../actions";
import { socket } from "../services";

const useStyles = createUseStyles(styles());

function LoginPanel() {
  const [userName, setUserName] = useState("");
  const classes = useStyles();

  const dispatch = useDispatch();
  const setLoginUser = useCallback(
    payload => dispatch(actions.setLoginUser(payload)),
    [dispatch]
  );
  const setCurrentUser = useCallback(
    payload => dispatch(actions.setCurrentUser(payload)),
    [dispatch]
  );

  const handleChange = event => {
    setUserName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (userName !== "") {
      setCurrentUser(userName);
      setLoginUser(true);

      socket.send(
        JSON.stringify({
          payload: {
            name: userName
          },
          type: "ADD_USER"
        })
      );
    }
  };

  return (
    <form className={classes.panelLogin} onSubmit={handleSubmit}>
      <input
        className={classes.inputUserName}
        onChange={handleChange}
        value={userName}
        type="text"
      />
      <button className={classes.buttonLogin}>Login</button>
    </form>
  );
}

function styles() {
  return {
    buttonLogin: {
      background: "#42b0f4",
      border: "2px solid #42b0f4",
      borderRadius: "0 0 4px 4px",
      color: "#fff",
      fontSize: "18px",
      padding: "5px 0",
      width: "100%"
    },
    inputUserName: {
      background: "#fff",
      border: "0px",
      boxSizing: "border-box",
      color: "#555",
      fontSize: "16px",
      padding: "20px 20px",
      textAlign: "center",
      width: "100%"
    },
    panelLogin: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)"
    }
  };
}

export default LoginPanel;
