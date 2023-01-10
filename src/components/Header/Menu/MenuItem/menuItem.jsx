import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
function MenuItem({ children }) {
  return (
    <NavLink to={children === "Home" ? "/" : children.toLowerCase()}>
      {({ isActive }) => (
        <ButtonStyled
          style={isActive ? { color: "pink" } : { fontSize: "14px" }}
        >
          {children}
        </ButtonStyled>
      )}
    </NavLink>
  );
}

const ButtonStyled = styled(Button)(() => ({
  width: "100px",
  height: "50px",
  marginRight: 15,
  fontSize: "15px",
  display: "inline-block",
  textAlign: "center",
  fontWeight: "bold",
  cursor: "pointer",
  color: "white",
}));

export default MenuItem;
