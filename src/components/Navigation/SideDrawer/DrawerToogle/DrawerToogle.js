import React from "react";
import classes from "./DrawerToogle.css";
const DrawerToogle = (props) => {
  return (
    <div className={classes.DrawerToogle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToogle;
