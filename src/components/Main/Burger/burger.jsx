import React from "react";
import Bap_bottom from "../../../assets/bottom_bun.png";
import Bap_top from "../../../assets/top_bun.png";
import styled from "@emotion/styled";
import BasicModal from "../BasicModal/BasicModal";

const Burger = ({ orderPrice, ingredientAddingOrder, clearBurger }) => {
  return (
    <BurgerStyled>
      <TitleStyled>Burger price {orderPrice}$</TitleStyled>
      <br></br>
      <BasicModal
        ingredientAddingOrder={ingredientAddingOrder}
        orderPrice={orderPrice}
        clearBurger={clearBurger}
      ></BasicModal>
      <br></br>
      <BurgerStyledSection>
        <TopBunStyled src={Bap_top}></TopBunStyled>
        <br></br>
        {!ingredientAddingOrder.length && (
          <SpanStyled>
            Please, start by adding ... <br></br>
          </SpanStyled>
        )}
        {ingredientAddingOrder.map((product, idx) => {
          const bottomOffset = 325 + idx * 9;
          const zIndex = idx + 5;

          return (
            <ProductIMGStyled
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

        <BottomBapStyled src={Bap_bottom}></BottomBapStyled>
      </BurgerStyledSection>
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
});

const SpanStyled = styled("span")({
  position: "absolute",
});

const ProductIMGStyled = styled("img")({
  width: "200px",
  height: "auto",
  position: "absolute",
});

const TitleStyled = styled("h3")({
  fontWeight: "bold",
});

const TopBunStyled = styled("img")({
  top: 0,
  zIndex: "100",
  width: 200,
  marginBottom: "5px",
  height: 110,
});

const BottomBapStyled = styled("img")({
  width: 200,
  height: 100,
  marginTop: "10px",
});

const BurgerStyledSection = styled("section")({
  maxHeight: "300px",
  alignSelf: "center",
  flexBasis: "50%",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0px",
  alignItems: "center",

  "@media screen and (max-width: 1440px)": {
    maxHeight: "165px",
  },
});

export default Burger;
