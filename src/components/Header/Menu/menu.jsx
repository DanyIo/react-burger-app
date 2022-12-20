import styled from "styled-components";
import React from "react";
const menuItems = ["Home", "Orders", "FAQ"];
function renderMenu() {
  const menu = menuItems.map((item) => {
    return <ButtonStyled key={item}>{item}</ButtonStyled>;
  });
  return menu;
}
function Menu() {
  return <DivStyled>{renderMenu()}</DivStyled>;
}
const DivStyled = styled.div({
  display: "flex",
  textAlign: "center",
});
const ButtonStyled = styled.button({
  width: "100px",
  height: "50px",
  marginRight: 15,
  display: "inline-block",
  lineHeight: "50px",
  textAlign: "center",
  fontSize: "17px",
  fontWeight: "bold",
});

export default Menu;
