import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import BoltIcon from "@mui/icons-material/Bolt";
import axios from "axios";
import swal from "sweetalert";
import Loader from "../../Loader/loader";
import CancelIcon from "@mui/icons-material/Cancel";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}
function validateNumber(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (
    !/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/i.test(
      value
    )
  ) {
    error = "Invalid phone number";
  }
  return error;
}
function validateUsername(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  if (value === "admin") {
    error = "Nice try!";
  } else if (!/[a-zA-Z]/i.test(value)) {
    error = "Invalid name";
  }
  return error;
}
function validateLocation(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/[a-zA-Z]/i.test(value)) {
    error = "Invalid location";
  }
  return error;
}

export const FieldLevelValidation = ({
  orderPrice,
  handleQuickDeliveryStatus,
  quickDeliveryStatus,
  handleModalWindowClose,
  sortedCopyOfIngredientAddingOrder,
  clearBurger,
}) => (
  <div>
    <h3 style={{ fontWeight: "Medium", textAlign: "center" }}>
      Fill out the form
    </h3>
    <Formik
      initialValues={{
        username: "",
        email: "",
        number: "",
        location: "",
      }}
      onSubmit={async (values) => {
        // same shape as initial values
        const orderData = {
          orderName: values.username,
          orderPhone: values.number,
          orderFast: quickDeliveryStatus,
          orderAddress: values.location,
          orderProducts: sortedCopyOfIngredientAddingOrder,
          orderPrice: orderPrice,
        };
        try {
          const response = await axios.post(
            "https://burger-api-xcwp.onrender.com/orders",
            orderData
          );
          if (response.status === 200) {
            swal("Successful order", "Enjoy your food!", "success").then(() => {
              clearBurger(), handleModalWindowClose();
            });
          }
        } catch (error) {
          console.log(error);
          swal("Oops!", "Something went wrong! Try again!", "error");
        }
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form
          method="POST"
          action="https://burger-api-xcwp.onrender.com/orders."
        >
          <FieldStyled
            name="username"
            validate={validateUsername}
            placeholder={"Username"}
          />
          {errors.username && touched.username && (
            <ErrorDivStyled style={{ color: "red", fontSize: "10px" }}>
              {errors.username}
            </ErrorDivStyled>
          )}

          <FieldStyled
            name="email"
            validate={validateEmail}
            placeholder={"Email"}
          />
          {errors.email && touched.email && (
            <ErrorDivStyled>{errors.email}</ErrorDivStyled>
          )}
          <FieldStyled
            name="number"
            validate={validateNumber}
            placeholder={"Number"}
          />
          {errors.number && touched.number && (
            <ErrorDivStyled>{errors.number}</ErrorDivStyled>
          )}
          <FieldStyled
            name="location"
            validate={validateLocation}
            placeholder={"Location"}
          />
          {errors.location && touched.location && (
            <ErrorDivStyled>{errors.location}</ErrorDivStyled>
          )}
          <div style={{ padding: 5 }}>
            <span>Quick delivery (2$ extra)</span>
            <Checkbox
              onClick={handleQuickDeliveryStatus}
              checked={quickDeliveryStatus ? true : false}
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </div>
          <div style={{ margin: 5, width: 582 }}>
            <h3 style={{ fontWeight: "Medium" }}>
              Total price:{" "}
              <span style={{ float: "right" }}>
                {quickDeliveryStatus
                  ? +(Number(orderPrice) + 2).toFixed(2)
                  : +orderPrice}
                ${quickDeliveryStatus && <BoltIconStyled />}
              </span>
            </h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleModalWindowClose}
              endIcon={<CancelIcon />}
            >
              Cancel
            </Button>
            <SendButtonStyled
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
            >
              Order
            </SendButtonStyled>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
const FieldStyled = styled(Field)(() => ({
  border: "1px solid #000",
  padding: 7,
  height: 25,
  marginTop: 15,
  width: 582,
  marginLeft: 5,
  marginRight: 5,
}));

const ErrorDivStyled = styled.div({
  color: "red",
  fontSize: "11px",
  padding: 5,
});
const SendButtonStyled = styled(Button)(() => ({
  background: "rgb(124, 252, 0)",
  color: "black",
  ":hover": {
    backgroundColor: "pink",
  },
  margin: 5,
  bottom: 0,
}));
const BoltIconStyled = styled(BoltIcon)(() => ({
  color: "black",
  transform: "down-4 grow-2.5",
  position:"absolute"
}));
