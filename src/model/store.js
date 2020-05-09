import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Reducers
import newsReducer from './reducers/newsReducer';
import googleMapReducer from './reducers/googleMapReducer';

const reducers = combineReducers({
  news: newsReducer,
  googleMap: googleMapReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;