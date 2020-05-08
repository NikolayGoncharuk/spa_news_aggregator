const initialState = {
  response: {
    articles: [],
  },
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};