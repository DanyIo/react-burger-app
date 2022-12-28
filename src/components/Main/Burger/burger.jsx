import styled from "styled-components";
import React from "react";
import Bap_bottom from "../../../assets/bottom_bun.png";
import Bap_top from "../../../assets/top_bun.png";
const Burger = ({ orderPrice, ingredientAddingOrder }) => {
  return (
    <BurgerStyled>
      <TitleStyled>Burger price {orderPrice}$</TitleStyled>
      <br></br>
      <ButtonStyled>Checkout</ButtonStyled>
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
          return (
            <ProductIMGStyled
              key={product}
              src={require(`../../../assets/products/${product}.png`)}
              alt={product}
              style={{
                bottom: 310 + idx * 9,
                zIndex: idx + 5,
              }}
            ></ProductIMGStyled>
          );
        })}
        <BottomBapStyled src={Bap_bottom}></BottomBapStyled>
      </BurgerStyledSection>
    </BurgerStyled>
  );
};

const BurgerStyled = styled.div({
  backgroundColor: "#fff",
  borderRadius: "2px",
  boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
  height: "50vh",
  top: "69%",
  left: "31%",
  padding: "15px",
  margin: "15px",
  display: "table-cell",
  width: "60%",
  textAlign: "center",
  justifyContent: "center",
});
const SpanStyled = styled.span({
  position:"absolute"
})
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
const ProductIMGStyled = styled.img({
  width: "200px",
  position: "absolute",
});
const TitleStyled = styled.h3({
  fontWeight: "bold",
});
const TopBunStyled = styled.img({
  top: 0,
  zIndex: "100",
  width: 200,
  margin: 5,
  height: 110,
});
const BottomBapStyled = styled.img({
  width: 200,
  height: 100,
  margin: 10,
});
const BurgerStyledSection = styled.section({
  height: "65%",
  alignSelf: "center",
  flexBasis: "50%",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
});
export default Burger;
