import { Button, TextField } from "@material-ui/core";
import { GlobalContext } from "../../store";
import "./PaymentStep.component.scss";
import { useContext, useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const PaymentStep = () => {
  const [creditNumbrError, setCreditNumbrError] = useState(false);

  const { activeStep, setActiveStep, subscriptionForm, setSubscriptionForm } =
    useContext(GlobalContext);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "creditCardNumber") {
      value
        ? setCreditNumbrError(!isValidNumber(value))
        : setCreditNumbrError(false);
    }
    const obj: any = {};
    obj[name] = value;
    setSubscriptionForm({ ...subscriptionForm, ...obj });
  };

  const isValidNumber = (value: string) => {
    const regex = /^[0-9\s\-+]*$/;
    if (regex.test(value)) {
      return true;
    }
    return false;
  };

  return (
    <div className="payment-step">
      <div className="main-header">Enter credit card credentials.</div>
      <div className="inputs-wrapper">
        <TextField
          style={{ minWidth: "300px" }}
          required
          className="w-25 mb-5"
          id="credit-card-number"
          label="credit card number"
          name="creditCardNumber"
          onChange={handleChange}
          value={subscriptionForm.creditCardNumber}
          inputProps={{
            maxLength: 18,
          }}
          error={creditNumbrError ? true : false}
        />

        <TextField
          style={{ minWidth: "300px" }}
          required
          className="w-25 mb-5"
          id="credit-card-number"
          label="credit card exp date"
          name="creditCardExpData"
          onChange={handleChange}
          value={subscriptionForm.creditCardExpData}
        />
        <TextField
          style={{ minWidth: "300px" }}
          required
          className="w-25 mb-5"
          id="credit-card-number"
          label="credit card security code"
          name="creditCardSecCode"
          onChange={handleChange}
          value={subscriptionForm.creditCardSecCode}
          inputProps={{
            maxLength: 6,
          }}
        />
      </div>
      <div className="navigation-buttons d-flex flex-row justify-content-end">
        <Button
          className="btn-secondary-theme btn-prev"
          variant="outlined"
          color="primary"
          onClick={() => {
            setActiveStep(activeStep - 1);
          }}
        >
          Back
        </Button>
        <Button
          className="btn-primary-theme btn-next"
          variant="contained"
          color="primary"
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
          disabled={
            subscriptionForm.creditCardNumber.length === 0 ||
            subscriptionForm.creditCardExpData.length === 0 ||
            subscriptionForm.creditCardSecCode.length === 0
          }
        >
          Next <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;
