import { useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import "./SubscriptionStepper.component.scoped.scss";
import { StepButton } from "@material-ui/core";
import { GlobalContext } from "../../store";
import { steps } from "../../statics/steps";

const SubscriptionStepper: React.FC = () => {
  const { activeStep, setActiveStep } = useContext(GlobalContext);

  const handleStep = (index: number) => {
    if (index < activeStep && activeStep < 3) {
      setActiveStep(index);
    }
  };

  return (
    <div className="case-stepper">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label: string, index: number) => (
          <Step key={index} className="case-step">
            <StepButton
              onClick={handleStep.bind(null, index)}
              disabled={index >= activeStep}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default SubscriptionStepper;
