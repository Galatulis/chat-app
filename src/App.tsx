import React, { useEffect, useState } from "react";
import injectSheet, { WithSheet } from "react-jss";

import { socket } from "./services";
import {
  LoginPanel,
  MessageInput,
  MessageList,
  SideBar,
  TitleBar
} from "./components";

function App({ classes }: WithSheet<typeof styles>) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const logIn = (name: string) => {
    setLoggedIn(true);

    socket.send(
      JSON.stringify({
        payload: {
          name
        },
        type: "ADD_USER"
      })
    );
  };

  useEffect(() => {
    document.title = "GalaChat";
  }, []);

  return (
    <div className={classes.flexContainer}>
      {!loggedIn ? (
        <LoginPanel logIn={logIn} />
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
        padding: "0px"
      },
      "*, *::before, *::after": {
        boxSizing: "border-box"
      },
      "#root": {
        height: "100vh"
      }
    },
    "flexContainer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
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
      maxWidth: "600px"
    }
  };
}

export default injectSheet(styles)(App);
