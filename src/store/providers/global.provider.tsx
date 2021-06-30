import React, { createContext, useReducer } from "react";
import GlobalReducer from "../reducers/global.reducer";

const initialState: any = {
  activeStep: 0,
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

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setActiveStep,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
