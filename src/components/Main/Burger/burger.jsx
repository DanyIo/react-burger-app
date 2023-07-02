import React from "react";
import Bap_bottom from "../../../assets/bottom_bun.png";
import Bap_top from "../../../assets/top_bun.png";
import { styled } from "@mui/system";
import BasicModal from "../BasicModal/BasicModal";

const Burger = ({ orderPrice, ingredientAddingOrder, clearBurger }) => {
  return (
    <BurgerStyled>
      <TitleStyled>Burger price {orderPrice}$</TitleStyled>
      <br />
      <BasicModal
        ingredientAddingOrder={ingredientAddingOrder}
        orderPrice={orderPrice}
        clearBurger={clearBurger}
      />
      <br />
      <BurgerSection>
        <TopBunStyled src={Bap_top} />
        {!ingredientAddingOrder.length && (
          <MessageStyled>
            Please start by adding ingredients...
          </MessageStyled>
        )}
        <IngredientsContainer>
          {ingredientAddingOrder.map((product, idx) => {
            const zIndex = idx + 5;
            const bottomOffset = (10 * idx)-100;

            return (
              <IngredientStyled
                key={`${product}_${idx}`}
                src={require(`../../../assets/products/${product}.png`)}
                alt={product}
                style={{
                  zIndex: zIndex,
                  bottom: bottomOffset,
                }}
              />
            );
          })}
        </IngredientsContainer>
        <BottomBunStyled src={Bap_bottom} />
      </BurgerSection>
    </BurgerStyled>
  );
};

const BurgerStyled = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "2px",
  boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
  padding: "15px",
  margin: "15px",
  textAlign: "center",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const BurgerSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

const IngredientsContainer = styled("div")({
  position: "relative",
});

const IngredientStyled = styled("img")({
  width: "200px",
  height: "auto",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
});

const TitleStyled = styled("h3")({
  fontWeight: "bold",
});

const TopBunStyled = styled("img")({
  width: 200,
  height: 110,
  marginBottom: "5px",
  zIndex:1000
});

const BottomBunStyled = styled("img")({
  width: 200,
  height: 100,
  marginTop: "10px",
});

const MessageStyled = styled("span")({
  fontWeight: "bold",
  marginTop:"4%"
});

export default Burger;
