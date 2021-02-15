import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Auxiliary from "../../hoc/Auxiliary";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <div className="BurgerBuilder">
        <Auxiliary>
          <div>
            <Burger ingredients={this.state.ingredients} />
          </div>
          <div>Build Controls</div>
        </Auxiliary>
      </div>
    );
  }
}

export default BurgerBuilder;
