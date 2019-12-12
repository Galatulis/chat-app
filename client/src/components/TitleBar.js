import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles());

function TitleBar() {
  const classes = useStyles();

  return (
    <header className={classes.panelTitle}>
      <p className={classes.textTitle}>GalaChat</p>
    </header>
  );
}

function styles() {
  return {
    panelTitle: {
      border: "1px solid #ddd",
      borderRadius: "3px",
      boxShadow: "1px 3px 5px rgba(0,0,0,0.2)",
      gridArea: "header",
      padding: "0px",
    },
    textTitle: {
      color: "#42b0f4",
      fontSize: "30px",
      textAlign: "center",
    },
  };
}

export default TitleBar;
