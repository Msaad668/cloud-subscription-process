import React, { createContext, useReducer } from "react";
import { SubscriptionForm } from "../../types/subscription-form";
import GlobalReducer from "../reducers/global.reducer";

const initialState: any = {
  activeStep: 0,
  subscriptionPlans: {},
  loading: true,
  subscriptionForm: new SubscriptionForm(),
  totalPrice: 120,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function setActiveStep(activeStep: number) {
    dispatch({
      type: "SET_ACTIVE_STEP",
      payload: { activeStep },
    });
  }

  function setSubscriptionPlans(subscriptionPlans: any) {
    dispatch({
      type: "SET_SUBSCRIPTION_PLANS",
      payload: { subscriptionPlans },
    });
  }

  function setSubscriptionForm(data: SubscriptionForm) {
    dispatch({
      type: "SET_SUBSCRIPTION_FORM",
      payload: { data },
    });
  }

  function setLoading(loading: Boolean) {
    dispatch({
      type: "SET_LOADING",
      payload: { loading },
    });
  }

  function setTotalPrice(totalPrice: number) {
    dispatch({
      type: "SET_TOTAL_PRICE",
      payload: { totalPrice },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setActiveStep,
        setSubscriptionPlans,
        setLoading,
        setSubscriptionForm,
        setTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
