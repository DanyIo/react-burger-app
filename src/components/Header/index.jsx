import styled from "styled-components";
import Title from "./Title/title";
import Menu from "./Menu/menu";
import Logo from "./Logo/logo";
import React from "react";

function Header() {
  return (
    <HeaderStyled>
      <Logo></Logo>
      <Title></Title>
      <Menu></Menu>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div({
  backgroundColor: "black",
  display: "flex",
  height: "100px",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "15px",
});

export default Header;
