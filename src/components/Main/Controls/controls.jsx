import React from "react";
import styled from "styled-components";
const Control = () => {
  return (
    <ControlStyled>
      <TemporaryStyledText>To be continued...</TemporaryStyledText>
    </ControlStyled>
  );
};
const ControlStyled = styled.div({
  backgroundColor: "black",
  textAlign: "center",
  verticalAlign: "center",
  display: "table-cell",
  padding: 15,
  margin: "15px",
  color: "white",
});
const TemporaryStyledText = styled.h3({
  transform: "rotate(90deg)",
  transformOrigin: "top left",
  marginLeft: "4rem",
});
export default Control;
