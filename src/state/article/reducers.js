import {
  CREATE_ARTICLE_SUCCESS,
  GET_ARTICLE_SUCCESS,
  IS_ARTICLE_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_ERROR,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
} from './actionTypes';

import { initialState } from './state';

export default (state = initialState, action) => {
  if (action === undefined || !action) { return state; }
  const { type } = action;
  switch (type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        allArticles: [
          action.payload.data,
          ...state.allArticles,
        ],
        isArticleRequest: false,
      };
    case IS_ARTICLE_REQUEST:
      return {
        ...state,
        isArticleRequest: true,
      };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        allArticles: action.payload
      };
    case GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        articleIsViewed: { data: action.payload.data, error: null },
        isArticleRequest: false,
      };
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articleIsViewed: { data: action.payload.data, error: null },
        isArticleRequest: false,
      };
    case UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        articleIsViewed: { data: action.payload.data, error: null },
        isArticleRequest: false,
      };
    case GET_ARTICLE_BY_ID_ERROR:
      return {
        ...state,
        articleIsViewed: { data: null, error: action.payload }
      };
    default:
      return state;
  }
};
