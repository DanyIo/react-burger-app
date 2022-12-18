import styled from "styled-components";
import React from "react";
import Bap_bottom from "../../../assets/bottom_bun.png";
import Bap_top from "../../../assets/top_bun.png";
const Burger = (data) => {
  const { orderPrice } = data;
  return (
    <BurgerStyled>
      <TitleStyled>Burger price {orderPrice}$</TitleStyled>
      <br></br>
      <ButtonStyled>Checkout</ButtonStyled>
      <br></br>
      <BapStyled src={Bap_top}></BapStyled>
      <br></br>
      Please, start by adding ...<br></br>
      <BapStyled src={Bap_bottom}></BapStyled>
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
});
const TitleStyled = styled.h3({
  fontWeight: "bold",
});
const BapStyled = styled.img({
  width: 300,
  height: 100,
  margin: 25,
});
export default Burger;
