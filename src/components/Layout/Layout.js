import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";
class layout extends Component {
  state = {
    showSideDrawer: true,
  };
  SideDrawerCLosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        <Toolbar DrawerToogleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCLosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default layout;
