import Banner from "./Banner/baner";
import styled from "styled-components";
import React from "react";
import Burger from "./Burger/burger";
import Prices from "./Prices/prices";
import Control from "./Controls/controls";
import "../.././index.css";
class State extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: [
        { price: 0.75, name: "Bacon" },
        { price: 1.7, name: "Cheese" },
        { price: 0.95, name: "Salad" },
        { price: 1.25, name: "Pickle" },
        { price: 2, name: "Meat" },
      ],
      ingredients: [],
      ingredientAddingOrder: [],
      orderPrice: "1.00",
    };
  }
  render() {
    const { prices, ingredients, orderPrice} = this.state;
    return (
      <MainStyled>
        <Banner></Banner>
        <div className="Row">
          <Prices priceList={prices} ingredients={ingredients}></Prices>
          <Burger orderPrice = {orderPrice}></Burger>
          <Control></Control>
        </div>
      </MainStyled>
    );
  }
}
const MainStyled = styled.div({
  display: "table",
  margin: "15px",
});
export default State;
