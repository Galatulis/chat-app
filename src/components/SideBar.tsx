import React from "react";
import injectSheet, { WithSheet } from "react-jss";
import { useSelector } from "react-redux";

import { StoreState } from "../interfaces";

function SideBar({ classes }: WithSheet<typeof styles>) {
  const listOfUsers = useSelector<StoreState, StoreState["listOfUsers"]>(
    state => state.listOfUsers
  );

  return (
    <div className={classes.SideBar}>
      {listOfUsers.map(user => (
        <p key={user.id} className={classes.TextUser}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

function styles() {
  return {
    SideBar: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      gridArea: "sidebar",
      overflow: "auto",
      padding: "10px 20px"
    },
    TextUser: {
      color: "#42b0f4",
      textTransform: "uppercase"
    }
  };
}

export default injectSheet(styles)(SideBar);
