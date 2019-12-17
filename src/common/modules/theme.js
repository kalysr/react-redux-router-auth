import { DARK_THEME, LIGHT_THEME } from "../constants/index";

export const SET_THEME = "theme/SET_THEME";

const initialState = DARK_THEME;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.theme;

    default:
      return state;
  }
};

export const toggleTheme = () => {
  return (dispatch, getState) => {
    dispatch(
      setTheme(getState().theme === DARK_THEME ? LIGHT_THEME : DARK_THEME)
    );
  };
};

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme
});
