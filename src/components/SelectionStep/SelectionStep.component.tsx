import { Button, Switch } from "@material-ui/core";
import "./SelectionStep.component.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useContext } from "react";
import { GlobalContext } from "../../store";

const SelectionStep = () => {
  const { activeStep, setActiveStep, subscriptionPlans, loading } =
    useContext(GlobalContext);

  return (
    <div>
      <h1>selectionstep</h1>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="d-flex flex-row align-items-center justify-content-start w-100">
          {subscriptionPlans.map((plan: any, index: number) => (
            <div key={index} className="subscription-wrapper w-100">
              <div className="subscription">
                <p>{plan.duration_months} months</p>
                <p>{plan.price_usd_per_gb} USD/GB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Switch
        checked={true}
        // onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        checked={true}
        // onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />

      <div className="d-flex flex-row justify-content-end mt-5">
        <Button
          className="btn-primary-theme btn-next"
          variant="contained"
          color="primary"
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
          //   disabled={!caseForm.branchId || !caseForm.originalLandId}
        >
          <ArrowForwardIcon /> Next
        </Button>
      </div>
    </div>
  );
};

export default SelectionStep;
