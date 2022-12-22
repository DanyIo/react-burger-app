import Banner from "./Banner/banner";
import styled from "styled-components";
import React from "react";
import axios from "axios";
import Burger from "./Burger/burger";
import Prices from "./Prices/prices";
import Controls from "./Controls/controls";
import "../.././index.css";
class State extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: [],
      ingredients: [],
      ingredientAddingOrder: [],
      orderPrice: "1.00",
      loading: false,
    };
  }
  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );
      const ingredients = this.state.prices.map((ingredient) => {
        return ingredient.name;
      });
      const quantities = this.state.prices.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );
      this.setState({
        ingredients: ingredients,
        burgerCreator: quantities,
        prices: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
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
        newPrice -= +ingredientPrice;

        const idx = copyIngredientAddingOrder.lastIndexOf(ingredientClicked);

        copyIngredientAddingOrder.splice(idx, 1);

        copyBurgerCreator[ingredientClicked]--;
      }
      if (actionClicked === "increment") {
        if (copyIngredientAddingOrder.length < 10) {
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
  clearBurger = () => {
    const emptyBurgerCreator = {};
    for (const ingredient in this.state.burgerCreator) {
      emptyBurgerCreator[ingredient] = 0;
    }
    if (this.state.ingredientAddingOrder.length !== 0) {
      this.setState({
        ingredientAddingOrder: [],
        burgerCreator: emptyBurgerCreator,
        orderPrice: "1.00",
      });
    }
  };
  render() {
    const {
      prices,
      ingredients,
      orderPrice,
      burgerCreator,
      ingredientAddingOrder,
      loading,
    } = this.state;
    return (
      <MainStyled>
        <Banner></Banner>
        <div className="Row">
          <Prices priceList={prices} loading={loading}></Prices>
          <Burger
            orderPrice={orderPrice}
            ingredientAddingOrder={ingredientAddingOrder}
          ></Burger>
          <Controls
            ingredients={ingredients}
            QuantitiesList={burgerCreator}
            updateBurger={this.handleChangeBurgerIngredientQuantity}
            loading={loading}
            clear={this.clearBurger}
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
