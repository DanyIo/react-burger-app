import Banner from "./Banner/banner";
import styled from "styled-components";
import React from "react";
import Burger from "./Burger/burger";
import Prices from "./Prices/prices";
import Controls from "./Controls/controls";
import "../.././index.css";
class State extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: [
        { price: 0.75, name: "bacon" },
        { price: 1.7, name: "cheese" },
        { price: 0.95, name: "salad" },
        { price: 1.25, name: "pickle" },
        { price: 2, name: "meat" },
      ],
      ingredients: [],
      ingredientAddingOrder: [],
      orderPrice: "1.00",
    };
  }
  componentDidMount = () => {
    const ingredients = this.state.prices.map((ingredient) => {
      return ingredient.name;
    });
    const quantities = this.state.prices.reduce(
      (acc, curr) => ({ [curr.name]: 0, ...acc }),
      {}
    );
    this.setState({ ingredients: ingredients, burgerCreator: quantities });
  };
  findIngredientPrice = (ingredient) => {
    return this.state.prices.find((price) => price.name === ingredient).price;
  };
  handleChangeBurgerIngredientQuantity = (event) => {
    const ingredientClicked = event.target.dataset["ingredient"];
    const actionClicked = event.target.dataset["action"];
    const ingredientPrice = this.findIngredientPrice(ingredientClicked);
    this.setState((prevState) => {
      const copyBurgerCreator = { ...prevState.burgerCreator };
      const copyIngredientAddingOrder = [...prevState.ingredientAddingOrder];
      let newPrice = +prevState.orderPrice;
      if (actionClicked === "decrement") {
        if (copyBurgerCreator[ingredientClicked] > 0) {
          newPrice -= +ingredientPrice;

          const idx = copyIngredientAddingOrder.lastIndexOf(ingredientClicked);

          copyIngredientAddingOrder.splice(idx, 1);

          copyBurgerCreator[ingredientClicked]--;
        }
      }
      if (actionClicked === "increment") {
        if (
          copyBurgerCreator[ingredientClicked] < 5 &&
          copyIngredientAddingOrder.length < 10
        ) {
          newPrice += +ingredientPrice;
          copyIngredientAddingOrder.push(ingredientClicked);
          copyBurgerCreator[ingredientClicked]++;
        }
      }
      return {
        ...prevState,
        ingredientAddingOrder: copyIngredientAddingOrder,
        burgerCreator: copyBurgerCreator,
        orderPrice: newPrice.toFixed(2),
      };
    });
  };
  render() {
    const {
      prices,
      ingredients,
      orderPrice,
      burgerCreator,
      ingredientAddingOrder,
    } = this.state;
    return (
      <MainStyled>
        <Banner></Banner>
        <div className="Row">
          <Prices priceList={prices} ingredients={ingredients}></Prices>
          <Burger
            orderPrice={orderPrice}
            ingredientAddingOrder={ingredientAddingOrder}
          ></Burger>
          <Controls
            priceList={prices}
            ingredients={ingredients}
            QuantitiesList={burgerCreator}
            updateBurger={this.handleChangeBurgerIngredientQuantity}
          ></Controls>
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
