import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { FieldLevelValidation } from "./FieldLevelValidation/fieldLevelValidation";
export default function BasicModal({
  ingredientAddingOrder,
  orderPrice,
  clearBurger,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quickDeliveryStatus, setQuickDeliveryStatus] = React.useState(false);
  const copyOfIngredientAddingOrder = [...ingredientAddingOrder];
  const sortedCopyOfIngredientAddingOrder = copyOfIngredientAddingOrder.reduce(
    (allNames, name) => {
      const currCount = allNames[name] ?? 0;
      return {
        ...allNames,
        [name]: currCount + 1,
      };
    },
    {}
  );

  function handleQuickDeliveryStatus() {
    quickDeliveryStatus
      ? setQuickDeliveryStatus(false)
      : setQuickDeliveryStatus(true);
    return quickDeliveryStatus;
  }
  return (
    <div>
      <ButtonStyled
        variant="contained"
        startIcon={<ShoppingBasketIcon icon={faInfo} />}
        onClick={handleOpen}
        disabled={ingredientAddingOrder.length === 0 ? true : false}
      >
        Checkout
      </ButtonStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Order
          </Typography>
          {Object.keys(sortedCopyOfIngredientAddingOrder).map((product) => {
            return (
              <DivStyled key={product}>
                <ProductIconStyled
                  src={require(`../../../assets/ingredients/${product}.png`)}
                ></ProductIconStyled>

                <span
                  style={{ float: "right", fontFamily: "bold", padding: 6 }}
                >
                  {sortedCopyOfIngredientAddingOrder[product]}
                </span>
              </DivStyled>
            );
          })}
          <FieldLevelValidation
            orderPrice={orderPrice}
            handleQuickDeliveryStatus={handleQuickDeliveryStatus}
            quickDeliveryStatus={quickDeliveryStatus}
            handleModalWindowClose={handleClose}
            sortedCopyOfIngredientAddingOrder={
              sortedCopyOfIngredientAddingOrder
            }
            clearBurger={clearBurger}
          ></FieldLevelValidation>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  overflow: "auto",
  top: "45%",
  left: "50%",
  width: 600,
  height: 600,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ProductIconStyled = styled.img({
  float: "left",
  width: "32px",
});
const ButtonStyled = styled(Button)(() => ({
  background: "black",
  ":hover": {
    backgroundColor: "pink",
  },
}));
const DivStyled = styled.div({
  border: "2px solid #000",
  boxShadow: 100,
  margin: 5,
  padding: 5,
  height: 35,
  display: "table",
  verticalAlign: "middle",
  width: 582,
});
