import { setPageSize } from './newsReducer';

const SET_DARK_MODE = 'theme/SET_DARK_MODE';
const SET_FONT_SIZE = 'theme/SET_FONT_SIZE';

const initialState = {
  darkMode: true,
  typography: {
    fontSize: 14
  }
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state, darkMode: action.darkMode
      };
    case SET_FONT_SIZE:
      return {
        ...state, typography: { fontSize: action.fontSize }
      };
    default:
      return state;
  };
};

// Action creators

const setPaletteType = (darkMode) => {
  return { type: SET_DARK_MODE, darkMode };
};

const setFontSize = (fontSize) => {
  return { type: SET_FONT_SIZE, fontSize };
};

// Thunk creators

export const saveSettings = (values) => (dispatch) => {
  dispatch(setPageSize(values.localPageSize));
  dispatch(setFontSize(values.localFontSize));
  dispatch(setPaletteType(values.localDarkMode));
};

export default themeReducer;