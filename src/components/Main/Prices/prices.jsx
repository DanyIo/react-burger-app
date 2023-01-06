import styled from "styled-components";
import React from "react";
import Loader from "../Loader/loader";

function ListItem(data) {
  return <LiStyled>{data.value}</LiStyled>;
}

const Prices = (data) => {
  const { priceList, loading } = data;
  const listItems = priceList.map((el) => (
    <ListItem key={`${el.name}`} value={`${el.name}: ${el.price}$`} />
  ));
  return (
    <PriceStyled>
      <TitleStyled>Our Prices</TitleStyled>
      <UlStyled>
        {loading ? (
          <CenterLoader>
            <Loader />
          </CenterLoader>
        ) : (
          listItems
        )}
      </UlStyled>
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
  position: "relative",
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
const CenterLoader = styled.div({
  position: "absolute",
  top: "50%",
  left: "45%",
  margin: "-25px 0 0 -25px",
});

export default Prices;
