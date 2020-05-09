const initialState = {
  darkMode: true,
  typography: {
    fontSize: 14,
  }
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};