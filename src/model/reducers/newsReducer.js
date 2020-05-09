import { newsAPI } from '../../api/api';

const SET_NEWS_RESPONSE = 'news/SET_NEWS_RESPONSE';
const PUSH_ARTICLES = 'news/PUSH_ARTICLES';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

const initialState = {
  newsResponse: {
    articles: [],
    totalResults: 0,
    status: '',
  },
  newsParams: {
    pageSize: 10,
    searchValue: '',
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
          status: action.data.status,
        },
      };
    case PUSH_ARTICLES:
      action.data.articles.forEach(item => {
        state.newsResponse.articles.push(item);
      });
      return {
        ...state,
        newsResponse: { ...state.newsResponse }
      };
    case SET_SEARCH_VALUE:
      return {
        ...state, newsParams: {
          ...state.newsParams,
          searchValue: action.searchValue
        }
      };
    default:
      return state;
  };
};

// Action creators

const setNewsResponse = (data) => ({
  type: SET_NEWS_RESPONSE, data,
});

const pushArticles = (data) => ({
  type: PUSH_ARTICLES, data,
});

export const setSearchValue = (searchValue) => {
  return { type: SET_SEARCH_VALUE, searchValue }
};

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
  else dispatch(pushArticles(data));
};