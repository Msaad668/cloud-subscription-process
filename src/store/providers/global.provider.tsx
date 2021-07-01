import React, { createContext, useReducer } from "react";
import GlobalReducer from "../reducers/global.reducer";

const initialState: any = {
  activeStep: 0,
  subscriptionPlans: {},
  loading: true,
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

  function setLoading(loading: Boolean) {
    dispatch({
      type: "SET_LOADING",
      payload: { loading },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setActiveStep,
        setSubscriptionPlans,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
