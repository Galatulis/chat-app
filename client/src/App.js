import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

import {
  LoginPanel,
  MessageInput,
  MessageList,
  SideBar,
  TitleBar,
} from "./components";

const useStyles = createUseStyles(styles());

function App() {
  const classes = useStyles();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    document.title = "Lambe";
  }, []);

  return (
    <div className={classes.flexContainer}>
      {!isLoggedIn ? (
        <LoginPanel />
      ) : (
        <div className={classes.gridContainer}>
          <TitleBar />
          <SideBar />
          <MessageList />
          <MessageInput />
        </div>
      )}
    </div>
  );
}

function styles() {
  return {
    "@global": {
      "body": {
        margin: "0px",
        padding: "0px",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      "#root": {
        height: "100vh",
      },
    },
    "flexContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    "gridContainer": {
      display: "grid",
      gridGap: "10px",
      gridTemplateAreas:
        '"header header"\n"sidebar content"\n"sidebar control"',
      gridTemplateColumns: "minmax(50px, 150px) minmax(50px, 450px)",
      gridTemplateRows:
        "minmax(50px, 100px) minmax(50px, 400px) minmax(50px, 100px)",
      margin: "0px",
      maxWidth: "600px",
    },
  };
}

export default App;
