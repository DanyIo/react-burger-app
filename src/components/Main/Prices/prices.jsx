import styled from "styled-components";
import React from "react";

function ListItem(data) {
  return <LiStyled>{data.value}</LiStyled>;
}

const Prices = (data) => {
  const { priceList } = data;
  const listItems = priceList.map((el, index) => (
    <ListItem key={`${el.name}_${index}`} value={`${el.name}: ${el.price}$`} />
  ));
  return (
    <PriceStyled>
      <TitleStyled>Our Prices</TitleStyled>
      <UlStyled>{listItems}</UlStyled>
    </PriceStyled>
  );
};

const PriceStyled = styled.div({
  textAlign: "center",
  display: "table-cell",
  padding: 15,
  width: "20%",
  backgroundColor: "#fff",
  borderRadius: "2px",
  boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
});
const TitleStyled = styled.h2({
  textShadow: "1.5px 0.5px 2px gray",
});
const LiStyled = styled.li({
  fontWeight: "bold",
  padding: 9,
  textShadow: "1.5px 0.5px 2px gray",
});
const UlStyled = styled.ul({
  listStyleType: "none",
  margin: 0,
  padding: 0,
});

export default Prices;
