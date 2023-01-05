import styled from "styled-components";
import axios from "axios";
import { React, useState, useEffect, useMemo } from "react";
import Burger from "./Burger/burger";
import Prices from "./Prices/prices";
import Controls from "./Controls/controls";
import "../.././index.css";
const Main = () => {
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [burgerCreator, setBurgerCreator] = useState({});
  const [prices, setPrices] = useState([{ name: "", price: "" }]);
  const [ingredientAddingOrder, setIngredientAddingOrder] = useState([]);
  const [orderPrice, setOrderPrice] = useState("1.00");
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );
      const priceList = data.map((element) => ({
        name: element.name,
        price: element.price,
      }));
      const quantities = priceList.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );
      setIngredients(
        priceList.map((ingredient) => {
          return ingredient.name;
        })
      );
      setBurgerCreator(quantities);
      setPrices(priceList);
      setLoading(false);
    }
    getData();
  }, []);
  const findIngredientPrice = (ingredient) => {
    return prices.find((price) => price.name === ingredient).price;
  };
  const handleChangeBurgerIngredientQuantity = (event) => {
    const ingredientClicked = event.target.dataset["ingredient"];
    const actionClicked = event.target.dataset["action"];
    const ingredientPrice = findIngredientPrice(ingredientClicked);
    let newPrice = +orderPrice;
    if (actionClicked === "decrement") {
      newPrice -= ingredientPrice;
      const idx = ingredientAddingOrder.lastIndexOf(ingredientClicked);
      setIngredientAddingOrder((prevIngredientAddingOrder) => {
        prevIngredientAddingOrder.splice(idx, 1);
        return prevIngredientAddingOrder;
      });
      setBurgerCreator((prevBurgerCreator) => {
        prevBurgerCreator[ingredientClicked]--;
        return prevBurgerCreator;
      });
    }
    if (actionClicked === "increment") {
      if (ingredientAddingOrder.length < 10) {
        newPrice += ingredientPrice;
        setIngredientAddingOrder((prevIngredientAddingOrder) => [
          ...prevIngredientAddingOrder,
          ingredientClicked,
        ]);
        setBurgerCreator((prevBurgerCreator) => ({
          ...prevBurgerCreator,
          [ingredientClicked]: prevBurgerCreator[ingredientClicked]++,
        }));
      }
    }
    setOrderPrice(newPrice.toFixed(2));
  };

  const clearBurger = () => {
    if (ingredientAddingOrder.length !== 0) {
      const emptyBurgerCreator = {};
      for (let ingredient in burgerCreator) {
        emptyBurgerCreator[ingredient] = 0;
      }
      setIngredientAddingOrder([]);
      setBurgerCreator(emptyBurgerCreator);
      setOrderPrice("1.00");
    }
  };

  return (
    <MainStyled>
      <div className="Row">
        <Prices priceList={prices} loading={loading}></Prices>
        <Burger
          orderPrice={orderPrice}
          ingredientAddingOrder={ingredientAddingOrder}
          clearBurger={clearBurger}
        ></Burger>
        <Controls
          ingredients={ingredients}
          quantitieslist={burgerCreator}
          updateBurger={(event) => {
            handleChangeBurgerIngredientQuantity(event);
          }}
          loading={loading}
          clear={clearBurger}
        ></Controls>
      </div>
    </MainStyled>
  );
};
const MainStyled = styled.div({
  display: "table",
  margin: "15px",
});

export default Main;
