export const SUCCESS_LOGIN = "auth/SUCCESS_LOGIN";
export const START_LOGIN_PROCESS = "auth/START_LOGIN_PROCESS";

const initialState = {
  isAuthenticated: false,
  loginProcessing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_PROCESS:
      return {
        ...state,
        loginProcessing: true
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loginProcessing: false
      };

    default:
      return state;
  }
};

export const submitForm = (values) => {
  return (dispatch) => {
    dispatch({
      type: START_LOGIN_PROCESS
    });

    return setTimeout(() => {
      dispatch({
        type: SUCCESS_LOGIN
      });
    }, 3000);
  };
};
