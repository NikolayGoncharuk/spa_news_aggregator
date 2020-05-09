import { newsAPI } from '../../api/api';

const SET_NEWS_RESPONSE = 'news/SET_NEWS_RESPONSE';

const initialState = {
  newsResponse: {
    articles: null,
    totalResults: 0,
  },
  newsParams: {
    pageSize: 10,
    page: 1,
    sources: [
      'Lenta',
      'RT',
    ],
    language: 'ru',
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

export const getNewsResponse = (newsParams) => async (dispatch) => {
  const data = await newsAPI.getNewsResponse(newsParams);

  data.articles.forEach((item) => {
    let date = new Date(Date.parse(item.publishedAt));
    item.publishedAt = date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  dispatch(setNewsResponse(data));
};