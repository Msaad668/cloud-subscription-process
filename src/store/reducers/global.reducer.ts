// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.payload.activeStep,
      };

    default:
      return state;
  }
};
