// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.payload.activeStep,
      };

    case "SET_SUBSCRIPTION_PLANS":
      return {
        ...state,
        subscriptionPlans: action.payload.subscriptionPlans,
      };

    case "SET_SUBSCRIPTION_FORM":
      return {
        ...state,
        subscriptionForm: action.payload.data,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };

    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
      };

    default:
      return state;
  }
};
