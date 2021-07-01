import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@material-ui/core";
import "./SelectionStep.component.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useContext } from "react";
import { GlobalContext } from "../../store";

const SelectionStep = () => {
  const {
    activeStep,
    setActiveStep,
    subscriptionPlans,
    loading,
    subscriptionForm,
    setSubscriptionForm,
    setTotalPrice,
  } = useContext(GlobalContext);

  const handlePriceChange = (
    duration: number,
    amountOfGBs: number,
    pricePerGb: number,
    upfrontPayment: Boolean
  ) => {
    const price =
      duration * amountOfGBs * pricePerGb * (upfrontPayment === true ? 0.9 : 1);

    setTotalPrice(price);
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value =
      name === "upfrontPayment" ? event.target.checked : event.target.value;
    if (name === "upfrontPayment") {
      handlePriceChange(
        subscriptionForm.duration,
        subscriptionForm.amountOfGBs,
        subscriptionForm.pricePerGb,
        value
      );
    }

    if (name === "amountOfGBs") {
      handlePriceChange(
        subscriptionForm.duration,
        value,
        subscriptionForm.pricePerGb,
        subscriptionForm.upfrontPayment
      );
    }
    const obj: any = {};
    obj[name] = value;
    setSubscriptionForm({ ...subscriptionForm, ...obj });
  };

  const handleDurationChange = (plan: any) => {
    const { price_usd_per_gb, duration_months } = plan;
    handlePriceChange(
      duration_months,
      subscriptionForm.amountOfGBs,
      price_usd_per_gb,
      subscriptionForm.upfrontPayment
    );
    setSubscriptionForm({
      ...subscriptionForm,
      duration: duration_months,
      pricePerGb: price_usd_per_gb,
    });
  };

  return (
    <div className="subscription-step">
      <div className="main-header">Choose a subscription. Adjust anytime.</div>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center w-100 m-5">
          <CircularProgress />
        </div>
      ) : (
        <div className="d-flex flex-row align-items-center justify-content-center mb-5 w-100">
          {subscriptionPlans.map((plan: any, index: number) => (
            <div
              key={index}
              className={`${
                subscriptionForm.duration === plan.duration_months
                  ? "active"
                  : ""
              } subscription-wrapper `}
              onClick={handleDurationChange.bind(null, plan)}
            >
              <div className="subscription">
                <p>{plan.duration_months} months</p>
                <p>${plan.price_usd_per_gb}/Gb</p>

                <div className="subscription-option">
                  <img src="iconmonstr-check-mark-1.svg" alt="check mark" />
                  <div>Auto-scaling</div>
                </div>

                <div className="subscription-option">
                  <img src="iconmonstr-check-mark-1.svg" alt="check mark" />
                  <div>Network isolation</div>
                </div>

                <div className="subscription-option">
                  <img src="iconmonstr-check-mark-1.svg" alt="check mark" />
                  <div>Role-based access control</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex flex-row align-items-start justify-content-around w-100">
        <FormControl className="mb-4 mr-5 w-25">
          <InputLabel id="amount-of-gbs">Amount of Gigabytes/month</InputLabel>
          <Select
            labelId="amount-of-gbs"
            id="amount-of-gbs"
            value={subscriptionForm.amountOfGBs}
            onChange={handleChange}
            name="amountOfGBs"
          >
            <MenuItem value={5}>5 Gb</MenuItem>
            <MenuItem value={10}>10 Gb</MenuItem>
            <MenuItem value={50}>50 Gb</MenuItem>
          </Select>
        </FormControl>

        <div className="">
          <FormControlLabel
            control={
              <Switch
                checked={subscriptionForm.upfrontPayment}
                onChange={handleChange}
                name="upfrontPayment"
                color="primary"
              />
            }
            label="Pay upfront"
          />
          <p className="hint">* you get a 10% discount if you pay upfront.</p>
        </div>
      </div>

      <div className="navigation-buttons d-flex flex-row justify-content-end">
        <Button
          className="btn-primary-theme btn-next"
          variant="contained"
          color="primary"
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
        >
          Next <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default SelectionStep;
