import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transfromedIngredinets = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transfromedIngredinets.length === 0) {
    transfromedIngredinets = <p> PLease start adding ingredients!</p>;
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transfromedIngredinets}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
