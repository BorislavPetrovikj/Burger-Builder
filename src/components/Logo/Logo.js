import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/Images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger"></img>
    </div>
  );
};

export default Logo;
