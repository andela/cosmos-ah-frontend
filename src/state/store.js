/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { article } from './article';
import { login } from './auth';

const rootReducer = combineReducers({
  [article.stateKey]: article.reducer,
  [login.stateKey]: login.reducer
});

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
