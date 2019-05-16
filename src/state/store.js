/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { article } from './article';
import { profile } from './profile';
import { auth } from './auth';
import { alert } from './alert';
import { createArticle } from './create-article';
import { userPassword } from './password';

const middleware = [logger, thunk];
const rootReducer = combineReducers({
  [article.stateKey]: article.reducer,
  [profile.stateKey]: profile.reducer,
  [auth.stateKey]: auth.authReducer,
  [alert.stateKey]: alert.alertReducer,
  [createArticle.stateKey]: createArticle.reducer,
  [alert.stateKey]: alert.alertReducer,
  [userPassword.stateKey]: userPassword.reducer,
});

const reduxDevTools = process.env.NODE_ENV === 'production' ? p => p : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    reduxDevTools,
  ),
);

export default store;
