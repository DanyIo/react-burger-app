import { Button, Stack } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import Loader from "../Loader/loader";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import DeleteIcon from "@mui/icons-material/Delete";
function findOutQuantities(name, quantitieslist) {
  for (let element in quantitieslist) {
    if (element === name) {
      return quantitieslist[element];
    }
  }
}
const singleControl = (name, quantitieslist, updateBurger) => {
  return (
    <StyledLi key={`${name}_li`}>
      <Button
        disabled={findOutQuantities(name, quantitieslist) === 0 ? true : false}
        size="small"
        variant="elevated"
        data-action="decrement"
        onClick={updateBurger}
        data-ingredient={name}
      >
        -
      </Button>
      {findOutQuantities(name, quantitieslist)}
      <Button
        disabled={findOutQuantities(name, quantitieslist) === 5 ? true : false}
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
  quantitieslist,
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
                singleControl(el, quantitieslist, updateBurger)
              )}
            </UlStyled>
            <ButtonStyled
              onClick={clear}
              variant="contained"
              startIcon={<DeleteIcon icon={faInfo} />}
            >
              Clear
            </ButtonStyled>
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
const ButtonStyled = styled(Button)(() => ({
  background: "white",
  color: "black",
  ":hover": {
    backgroundColor: "pink",
  },
}));
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
  left: "45%",
  margin: "-25px 0 0 -25px",
});
export default Controls;
