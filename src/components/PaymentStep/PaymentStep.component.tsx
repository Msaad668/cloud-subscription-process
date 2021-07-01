import { Button } from "@material-ui/core";
import { GlobalContext } from "../../store";
import "./PaymentStep.component.scss";
import { useContext } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const PaymentStep = () => {
  const { activeStep, setActiveStep } = useContext(GlobalContext);

  return (
    <div>
      <h2>Pyemnt</h2>
      <div className="d-flex flex-row justify-content-end mt-5">
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
          // disabled={
          //   !isValidDescription(caseForm.originalDescription) ||
          //   !caseForm.categoryId ||
          //   datesInvalid
          // }
        >
          <ArrowForwardIcon /> Next
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;
