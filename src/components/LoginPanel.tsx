import React, { useState, ChangeEvent } from "react";
import injectSheet, { WithSheet } from "react-jss";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { actions } from "../actions";
import { GlobalState } from "../interfaces";

interface Props extends WithSheet<typeof styles> {
  currentUser: string;
  logIn: (_: string) => void;
  setCurrentUser: (_: string) => void;
}

function LoginPanel({ classes, logIn, setCurrentUser }: Props) {
  const [userName, setUserName] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName !== "") {
      setCurrentUser(userName);
      logIn(userName);
    }
  };

  return (
    <form className={classes.PanelLogin} onSubmit={handleSubmit}>
      <input
        className={classes.InputUserName}
        onChange={handleChange}
        value={userName}
        type="text"
      />
      <button className={classes.ButtonLogin}>Login</button>
    </form>
  );
}

function styles() {
  return {
    ButtonLogin: {
      background: "#42b0f4",
      border: "2px solid #42b0f4",
      borderRadius: "0 0 4px 4px",
      color: "#fff",
      fontSize: "18px",
      padding: "5px 0",
      width: "100%"
    },
    InputUserName: {
      background: "#fff",
      border: "0px",
      borderBottom: "1px solid #eee",
      boxSizing: "border-box",
      color: "#555",
      fontSize: "16px",
      padding: "20px 20px",
      textAlign: "center",
      width: "100%"
    },
    PanelLogin: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      display: "grid",
      margin: "30vh auto",
      maxWidth: "400px"
    }
  };
}

const mapStateToProps = (state: GlobalState) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (payload: string) => dispatch(actions.setCurrentUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(LoginPanel));
