import styled from "styled-components";
import React from 'react';

function Menu() {
  return (
    <DivStyled>
        <ButtonStyled>Home</ButtonStyled>
        <ButtonStyled>Orders</ButtonStyled>
        <ButtonStyled>FAQ</ButtonStyled>
    </DivStyled>
  );
}
const DivStyled = styled.div({
  display: "flex",
  textAlign:"center"
});
const ButtonStyled = styled.button({
    width: "100px",
    height: "50px",
    marginRight:15,
    display: "inline-block",
    lineHeight: "50px",
    textAlign: "center",
    fontSize:"17px",
    fontWeight:"bold",
});

export default Menu;
