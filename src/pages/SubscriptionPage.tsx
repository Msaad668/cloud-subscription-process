import SubscriptionStepper from "../components/SubscriptionStepper/SubscriptionStepper.component";
import { GlobalContext } from "../store";
import { useContext } from "react";
import SelectionStep from "../components/SelectionStep/SelectionStep.component";
import PaymentStep from "../components/PaymentStep/PaymentStep.component";
import ConfirmationStep from "../components/ConfirmationStep/ConfirmationStep.component";

const SubscriptionPage = () => {
  const { activeStep } = useContext(GlobalContext);

  return (
    <div className="home-content">
      <SubscriptionStepper />
      {activeStep === 0 && <SelectionStep />}
      {activeStep === 1 && <PaymentStep />}
      {activeStep === 2 && <ConfirmationStep />}
    </div>
  );
};

export default SubscriptionPage;
