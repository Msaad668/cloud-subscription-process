import "./ConfirmationStep.component.scss";
import { Button } from "@material-ui/core";
import { GlobalContext } from "../../store";
import { useContext } from "react";

const ConfirmationStep = () => {
  const { activeStep, setActiveStep } = useContext(GlobalContext);

  return (
    <div>
      <h2>confirmation</h2>
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
            console.log("confirm");
          }}
          // disabled={
          //   !isValidDescription(caseForm.originalDescription) ||
          //   !caseForm.categoryId ||
          //   datesInvalid
          // }
        >
          confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
