import SubscriptionStepper from "../components/SubscriptionStepper/SubscriptionStepper.component";
import { GlobalContext } from "../store";
import { useContext, useEffect } from "react";
import SelectionStep from "../components/SelectionStep/SelectionStep.component";
import PaymentStep from "../components/PaymentStep/PaymentStep.component";
import ConfirmationStep from "../components/ConfirmationStep/ConfirmationStep.component";
import { SubscriptionService } from "../services/subscription.service";

const SubscriptionPage = () => {
  const {
    activeStep,
    setSubscriptionPlans,
    setLoading,
    totalPrice,
    subscriptionForm,
  } = useContext(GlobalContext);
  const subscriptionService: SubscriptionService = new SubscriptionService();

  const fetchData = async () => {
    setLoading(true);
    const subscriptions = await subscriptionService.listSubscriptions();
    setSubscriptionPlans(subscriptions.subscription_plans);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <SubscriptionStepper />
      {/* <div className="price">totalPrice: ${totalPrice}</div> */}
      {activeStep === 0 && <SelectionStep />}
      {activeStep === 1 && <PaymentStep />}
      {activeStep === 2 && <ConfirmationStep />}
      <div className="sub-chip-price">{`Total price: $${totalPrice}`}</div>;
      <div className="sub-chip-subscription">{`type: ${subscriptionForm.duration} months`}</div>
    </div>
  );
};

export default SubscriptionPage;
