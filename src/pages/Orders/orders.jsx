import axios from "axios";
import React from "react";
import Loader from "../../components/Main/Loader/loader";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amountOfOrders, setAmountOfOrders] = useState(0);
  function validateData(data) {
    return data === undefined || data === ""
      ? "Not data from Back-end :-("
      : data;
  }
  useEffect(() => {
    try {
      setLoading(true);
      const getOrders = async () => {
        const { data: loadedOrders } = await axios.get(
          "https://burger-api-xcwp.onrender.com/orders"
        );
        const ordersToRender = loadedOrders.slice(-15);
        setOrders(ordersToRender);
        setLoading(false);
        setAmountOfOrders(loadedOrders.length);
      };
      getOrders();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div style={{ margin: 20 }}>
      {loading ? (
        <CenterLoader>
          <Loader />
        </CenterLoader>
      ) : (
        orders.map((element, index) => (
          <AccordionStyled key={`${element}_${index}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Order №{amountOfOrders - 15 + index}</Typography>
            </AccordionSummary>
            <AccordionDetailsStyled>
              <Typography>
                Name: {validateData(element.orderName)}
                <br></br>
                Address: {validateData(element.orderAddress)}
                <br></br>
                Fast order: {element.orderFast ? "Yes" : "No"}
                <br />
                Phone: {validateData(element.orderPhone)}
                <br />
                Order price:{" "}
                {validateData(element.orderPrice) ===
                "Not data from Back-end :-(" ? (
                  validateData(element.orderPrice)
                ) : (
                  <>{validateData(element.orderPrice)}$</>
                )}
                <br />
                <Accordion style={{ backgroundColor: "black" }}>
                  <AccordionSummaryStyled>
                    {" "}
                    <Typography>Products: </Typography>
                  </AccordionSummaryStyled>
                  <AccordionDetailsStyled style={{ padding: 0 }}>
                    <Typography>
                      {element.orderProducts === undefined ? (
                        <span>No data from backend ;-/</span>
                      ) : (
                        Object.keys(element.orderProducts).map((el) => (
                          <span key={el}>
                            {el} - {element.orderProducts[el]}
                            <br />
                          </span>
                        ))
                      )}
                    </Typography>
                  </AccordionDetailsStyled>
                </Accordion>
              </Typography>
            </AccordionDetailsStyled>
          </AccordionStyled>
        ))
      )}
    </div>
  );
};
const CenterLoader = styled.div({
  position: "absolute",
  top: "50%",
  left: "47%",
  margin: "-25px 0 0 -25px",
});
const AccordionStyled = styled(Accordion)(() => ({
  backgroundColor: "white",
  color: "black",
}));
const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
  backgroundColor: "black",
  color: "white",
}));
const ChildAccordionStyled = styled(AccordionDetails)(() => ({
  backgroundColor: "black",
  color: "white",
}));
export default Orders;
const AccordionSummaryStyled = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))({
  backgroundColor: "black",
  width: 90,
  color: "white",
  padding: 0,
});
