import { SubscriptionForm } from "./subscription-form";
import { SubscriptionPlan } from "./subscription-plan";

export interface ContextState {
  activeStep: number;
  subscriptionPlans: SubscriptionPlan[];
  loading: boolean;
  subscriptionForm: SubscriptionForm;
  totalPrice: number;
}
