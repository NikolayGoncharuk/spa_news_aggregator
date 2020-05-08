import { newsAPI } from '../../api/api';

const initialState = {
  response: {
    articles: [],
    totalResults: 0,
  },
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  };
};

// Thunk Creators

export const getNews = () => async (dispatch) => {
  const data = await newsAPI.getNews();
};