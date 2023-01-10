import styled from "styled-components";
import React from "react";
import MenuItem from "./MenuItem/menuItem";
const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  return (
    <>
      <DivStyled className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={item + index}>{item}</MenuItem>
        ))}
      </DivStyled>
    </>
  );
};

const DivStyled = styled.div({
  display: "flex",
  textAlign: "center",
});

export default Menu