import styled from "styled-components";
import mylogo from "./../../../assets/unnamed.png";
import React from 'react';

function Logo() {
  return (
    <LogoStyled>
      <img src={mylogo} height="60px" width={"75px"} alt=""></img>
    </LogoStyled>
  );
}
const LogoStyled = styled.div({
  flexBasis: "18%",
  margin:"35px"
});
export default Logo;
