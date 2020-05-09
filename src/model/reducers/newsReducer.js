import { newsAPI } from '../../api/api';

const SET_NEWS_RESPONSE = 'news/SET_NEWS_RESPONSE';
const PUSH_NEWS_RESPONSE = 'news/PUSH_NEWS_RESPONSE';

const initialState = {
  newsResponse: {
    articles: [],
    totalResults: 0,
    status: '',
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
      };
    case PUSH_NEWS_RESPONSE:
      action.data.articles.forEach(item => {
        state.newsResponse.articles.push(item);
      });
      return { ...state, newsResponse: { ...state.newsResponse } };
    default:
      return state;
  };
};

// Action creators

const setNewsResponse = (data) => ({
  type: SET_NEWS_RESPONSE, data,
});

const pushNewsResponse = (data) => ({
  type: PUSH_NEWS_RESPONSE, data,
});

// Thunk creators

export const getNewsResponse = (newsParams) => async (dispatch) => {
  const data = await newsAPI.getNewsResponse(newsParams);

  // Изменение формата даты
  data.articles.forEach((item) => {
    let date = new Date(Date.parse(item.publishedAt));
    item.publishedAt = date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  if (newsParams.page === 1) dispatch(setNewsResponse(data));
  else dispatch(pushNewsResponse(data));
};