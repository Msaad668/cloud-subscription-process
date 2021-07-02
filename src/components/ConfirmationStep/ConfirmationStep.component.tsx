import "./ConfirmationStep.component.scss";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { GlobalContext } from "../../store";
import { useContext, useState } from "react";
import DefaultInputView from "../default-input-view/default-input-view.component";
import { SubscriptionService } from "../../services/subscription.service";
import { SubscriptionForm } from "../../types/subscription-form";
import { showToastMsg } from "../../helpers";
import { emailRegex } from "../../statics/validators";

const ConfirmationStep: React.FC = () => {
  const [agreeToTerms, setAgreetoTerms] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const {
    activeStep,
    setActiveStep,
    subscriptionForm,
    setSubscriptionForm,
    totalPrice,
    setTotalPrice,
  } = useContext(GlobalContext);
  const subscriptionService: SubscriptionService = new SubscriptionService();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      value ? setEmailError(!emailRegex.test(value)) : setEmailError(false);
    }
    const obj: any = {};
    obj[name] = value;
    setSubscriptionForm({ ...subscriptionForm, ...obj });
  };

  const handleConfirmClick = async () => {
    await subscriptionService.subscribe(subscriptionForm);
    showToastMsg("success", "you subscribed successfully");
    setSubscriptionForm(new SubscriptionForm());
    setTotalPrice(120);
    setActiveStep(0);
  };

  return (
    <div className="confirmation-step">
      <div className="main-header">Check information</div>

      <div className="row w-100">
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="Subscription"
            value={subscriptionForm.duration}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="price per Gb"
            value={subscriptionForm.pricePerGb + "$"}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView label="total Price" value={totalPrice + "$"} />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label={"amount of gigbytes"}
            value={subscriptionForm.amountOfGBs + " Gb"}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="Upfront Payment"
            value={subscriptionForm.upfrontPayment ? "enabled" : "disabled"}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="Credit card number"
            value={subscriptionForm.creditCardNumber}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="Credit card exp date"
            value={subscriptionForm.creditCardExpData}
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-view">
          <DefaultInputView
            label="Credit card security code"
            value={subscriptionForm.creditCardSecCode}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start justify-content-start mb-3 w-100">
        <TextField
          style={{ minWidth: "300px" }}
          required
          className="w-25 mb-4"
          id="credit-card-number"
          label="email"
          name="email"
          onChange={handleChange}
          value={subscriptionForm.email}
          error={emailError ? true : false}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={agreeToTerms}
              onChange={() => setAgreetoTerms(!agreeToTerms)}
              color="primary"
            />
          }
          label="Agree to terms and conditions"
        />
      </div>

      <div className="navigation-buttons d-flex flex-row justify-content-end ">
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
          onClick={handleConfirmClick}
          disabled={
            !agreeToTerms || subscriptionForm.email.length === 0 || emailError
          }
        >
          confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
