import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Reducers
import newsReducer from './reducers/newsReducer';
import googleMapReducer from './reducers/googleMapReducer';
import faqReducer from './reducers/faqReducer';
import themeReducer from './reducers/themeReducer';
import navReducer from './reducers/navReducer';

const reducers = combineReducers({
  news: newsReducer,
  googleMap: googleMapReducer,
  faq: faqReducer,
  theme: themeReducer,
  nav: navReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;