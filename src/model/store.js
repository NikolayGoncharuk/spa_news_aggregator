import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Reducers
import newsReducer from './reducers/newsReducer';

const reducers = combineReducers({
  news: newsReducer,
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));