import styled from "styled-components";
import banner from "./../../../assets/jpk.jpeg";
import React from "react";

function Banner() {
  return (
    <BannerStyled>
      <img src={banner} alt="" width="100%" height="200px" />
    </BannerStyled>
  );
}

const BannerStyled = styled.div({
  padding: "15px",
});
export default Banner;
