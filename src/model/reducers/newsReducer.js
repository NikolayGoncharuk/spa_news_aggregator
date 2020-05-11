import { newsAPI } from '../../api/api';

const SET_ARTICLES = 'news/SET_ARTICLES';
const PUSH_ARTICLES = 'news/PUSH_ARTICLES';
const SET_CURRENT_ARTICLE = 'news/SET_CURRENT_ARTICLE';
const SET_SEARCH_VALUE = 'news/SET_SEARCH_VALUE';
const SET_DATE = 'news/SET_DATE';
const SET_PAGE_SIZE = 'news/SET_PAGE_SIZE';
const SET_LATEST_ARTICLES = 'news/SET_LATEST_ARTICLES';

const initialState = {
  articles: [],
  currentArticle: {},
  newsParams: {
    page: 1,
    pageSize: 10,
    searchValue: '',
    date: { from: '', to: '' },
    sources: ['lenta', 'rt'],
    language: 'ru',
  },
  latestArticles: {
    articles: [],
    maxArticlesLength: 5,
  },
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.data.articles,
      };
    case PUSH_ARTICLES:
      return {
        ...state,
        articles: [...state.articles]
          .concat(action.data.articles),
      };
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: action.data.articles[0],
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
    case SET_LATEST_ARTICLES:
      return {
        ...state,
        latestArticles: {
          ...state.latestArticles,
          articles: action.data.articles.filter((item, index) => (
            index < state.latestArticles.maxArticlesLength
          )),
        },
      };
    default:
      return state;
  };
};

// Action Creators

const setArticles = (data) => ({
  type: SET_ARTICLES, data,
});

const pushArticles = (data) => ({
  type: PUSH_ARTICLES, data,
});

const setCurrentArticle = (data) => ({
  type: SET_CURRENT_ARTICLE, data,
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

const setLatestArticles = (data) => {
  return { type: SET_LATEST_ARTICLES, data }
};

// Thunk Creators

export const getArticles = (newsParams) => async (dispatch) => {
  const data = await newsAPI.getArticles(newsParams);
  processArticles(data);
  if (data.status === 'ok') {
    if (newsParams.page === 1) dispatch(setArticles(data));
    else dispatch(pushArticles(data));
  };
};

export const getArticle = (value) => async (dispatch) => {
  const valueSplit = value.split('-');
  const sources = valueSplit.shift();
  const qInTitle = valueSplit.join(' ');

  const data = await newsAPI.getArticle({ sources, qInTitle });
  processArticles(data);
  if (data.status === 'ok') {
    dispatch(setCurrentArticle(data));
  };
};

export const getLatestArticles = (newsParams) => async (dispatch) => {
  const data = await newsAPI.getLatestArticles(newsParams);
  processArticles(data);
  if (data.status === 'ok') {
    dispatch(setLatestArticles(data));
  };
};

// Изменение формата даты и добавление id
const processArticles = (data) => {
  data.articles.forEach(item => {
    item.id = item.source.name
      .concat(' ', item.title)
      .toLowerCase()
      .split(' ')
      .join('-');
    const date = new Date(Date.parse(item.publishedAt));
    item.publishedAt = date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });
};