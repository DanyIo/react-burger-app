import { Button, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Loader from "../Loader/loader";

function findOutQuantities(name, QuantitiesList) {
  for (let element in QuantitiesList) {
    if (element === name) {
      return QuantitiesList[element];
    }
  }
}
const singleControl = (name, QuantitiesList, updateBurger) => {
  return (
    <StyledLi key={`${name}_li`}>
      <Button
        disabled={findOutQuantities(name, QuantitiesList) === 0 ? true : false}
        size="small"
        variant="elevated"
        data-action="decrement"
        onClick={updateBurger}
        data-ingredient={name}
      >
        -
      </Button>
      {findOutQuantities(name, QuantitiesList)}
      <Button
        disabled={findOutQuantities(name, QuantitiesList) === 5 ? true : false}
        size="small"
        variant="elevated"
        data-action="increment"
        onClick={updateBurger}
        data-ingredient={name}
      >
        +
      </Button>
      <ImageStyled
        src={require(`../../../assets/ingredients/${name}.png`)}
      ></ImageStyled>
    </StyledLi>
  );
};
const Controls = ({
  ingredients,
  QuantitiesList,
  updateBurger,
  loading,
  clear,
}) => {
  return (
    <ControlsStyledDiv>
      <ControlsStyled
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {loading ? (
          <CenterLoader>
            <Loader />
          </CenterLoader>
        ) : (
          <>
            <UlStyled>
              {ingredients.map((el) =>
                 singleControl(el, QuantitiesList, updateBurger)
              )}
            </UlStyled>
            <ButtonStyled onClick={clear}> Clear </ButtonStyled>
          </>
        )}
      </ControlsStyled>
    </ControlsStyledDiv>
  );
};
const StyledLi = styled.li({ backgroundColor: "white", padding: "10px" });
const UlStyled = styled.ul({
  listStyleType: "none",
  margin: 10,
  padding: 5,
});
const ControlsStyledDiv = styled.div({
  backgroundColor: "black",
  textAlign: "center",
  display: "table-cell",
  padding: 15,
  width: "20%",
  borderRadius: "2px",
  boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
  position: "relative",
});
const ControlsStyled = styled(Stack)({
  height: "65%",
  flexBasis: "22%",
  borderRadius: "15px",
  alignSelf: "center",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
});
const ImageStyled = styled.img({
  width: "32px",
});
const CenterLoader = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "-25px 0 0 -25px",
});
const ButtonStyled = styled.button({
  backgroundColor: "black",
  borderRadius: "4px",
  color: "white",
  padding: "10px 28px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  transition: "10s",
  cursor: "pointer",
});
export default Controls;
