import { newsAPI } from '../../api/api';

const SET_NEWS_RESPONSE = 'news/SET_NEWS_RESPONSE';
const PUSH_ARTICLES = 'news/PUSH_ARTICLES';
const SET_SEARCH_VALUE = 'news/SET_SEARCH_VALUE';
const SET_DATE = 'news/SET_DATE';
const SET_PAGE_SIZE = 'news/SET_PAGE_SIZE';

const initialState = {
  newsResponse: {
    articles: [],
    totalResults: 0,
    status: '',
  },
  newsParams: {
    page: 1,
    pageSize: 10,
    searchValue: '',
    date: { from: '', to: '' },
    sources: ['Lenta', 'RT'],
    language: 'ru',
  },
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_RESPONSE:
      action.data.articles.forEach((item, index) => {
        item.id = state.newsResponse.articles.length + index + 1;
      });
      return {
        ...state,
        newsResponse: {
          articles: action.data.articles,
          totalResults: action.data.totalResults,
          status: action.data.status,
        },
      };
    case PUSH_ARTICLES:
      action.data.articles.forEach((item, index) => {
        item.id = state.newsResponse.articles.length + index + 1;
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
    case SET_DATE:
      return {
        ...state, newsParams: {
          ...state.newsParams, date: {
            ...state.newsParams.date, to: action.date
          }
        }
      };
    case SET_PAGE_SIZE:
      return {
        ...state, newsParams: {
          ...state.newsParams, pageSize: action.pageSize
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

export const setDate = (date) => {
  return { type: SET_DATE, date }
};

export const setPageSize = (pageSize) => {
  return { type: SET_PAGE_SIZE, pageSize }
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