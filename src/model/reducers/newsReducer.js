import { newsAPI } from '../../api/api';

const SET_NEWS_RESPONSE = 'news/SET_NEWS_RESPONSE';

const initialState = {
  newsResponse: {
    articles: null,
    totalResults: 0,
  },
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_RESPONSE:
      return {
        ...state,
        newsResponse: {
          articles: action.data.articles,
          totalResults: action.data.totalResults,
        },
      }
    default:
      return state;
  };
};

// Action Creators

const setNewsResponse = (data) => ({
  type: SET_NEWS_RESPONSE, data,
});

// Thunk Creators

export const getNewsResponse = (setLoading) => async (dispatch) => {
  const data = await newsAPI.getNewsResponse();
  dispatch(setNewsResponse(data));
  setLoading();
};