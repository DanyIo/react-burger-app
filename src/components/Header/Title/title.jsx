import styled from "styled-components";
import React from 'react';

function Title() {
  return <TitleStyled>Burger App</TitleStyled>;
}
const TitleStyled = styled.h1({
  textAlign: "center",
  color: "white",
});

export default Title;
