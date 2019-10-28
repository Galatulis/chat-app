import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

import { StoreState } from "../interfaces";

const useStyles = createUseStyles(styles());

function MessageList() {
  const classes = useStyles();

  const listOfMessages = useSelector<
    StoreState,
    StoreState["message"]["listOfMessages"]
  >(state => state.message.listOfMessages);

  return (
    <main className={classes.panelMessage}>
      {listOfMessages.map(message => (
        <p key={message.id} className={classes.textMessage}>
          <span className={classes.textMessageAuthor}>{message.author}</span>
          &nbsp;&#58;&nbsp; {message.text}
        </p>
      ))}
    </main>
  );
}

function styles() {
  return {
    panelMessage: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      gridArea: "content",
      overflow: "auto",
      padding: "10px 5px"
    },
    textMessage: {
      borderBottom: "1px solid #e9e9e9",
      color: "#555",
      margin: "0 20px",
      padding: "14px 0px",
      textIndent: "12px"
    },
    textMessageAuthor: {
      color: "#42b0f4",
      textTransform: "uppercase"
    }
  };
}

export default MessageList;
