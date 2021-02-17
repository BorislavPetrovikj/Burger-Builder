import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigationitems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDrawer;
