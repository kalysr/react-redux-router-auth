export const SUCCESS_LOGIN = "auth/SUCCESS_LOGIN";
export const START_LOGIN_PROCESS = "auth/START_LOGIN_PROCESS";
export const START_LOGOUT_PROCESS = "auth/START_LOGOUT_PROCESS";
export const SUCCESS_LOGOUT = "auth/SUCCESS_LOGOUT";

const initialState = {
  isAuthenticated: false,
  loginProcessing: false,
  logoutProcessing: false
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
    case START_LOGOUT_PROCESS:
      return {
        ...state,
        logoutProcessing: true
      };
    case SUCCESS_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        logoutProcessing: false
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

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: START_LOGOUT_PROCESS
    });

    return setTimeout(() => {
      dispatch({
        type: SUCCESS_LOGOUT
      });
    }, 800);
  };
};
