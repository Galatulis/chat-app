import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

import { StoreState } from "../interfaces";

const useStyles = createUseStyles(styles());

function SideBar() {
  const classes = useStyles();

  const listOfUsers = useSelector<StoreState, StoreState["listOfUsers"]>(
    state => state.listOfUsers
  );

  return (
    <aside className={classes.sideBar}>
      {listOfUsers.map(user => (
        <p key={user.id} className={classes.textUser}>
          {user.name}
        </p>
      ))}
    </aside>
  );
}

function styles() {
  return {
    sideBar: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      gridArea: "sidebar",
      overflow: "auto",
      padding: "10px 20px"
    },
    textUser: {
      color: "#42b0f4",
      textTransform: "uppercase"
    }
  };
}

export default SideBar;
