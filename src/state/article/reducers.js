import {
  CREATE_ARTICLE_SUCCESS,
  GET_ARTICLE_SUCCESS,
  IS_ARTICLE_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_ERROR,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
} from './actionTypes';

import { initialState } from './state';

export default (state = initialState, action) => {
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
        allArticles: action.payload,
        isArticleRequest: false,
      };
    case GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        articleIsViewed: { data: action.payload.data, error: null },
        isArticleRequest: false,
      };
    case GET_ARTICLE_BY_ID_ERROR:
      return {
        ...state,
        isArticleRequest: false,
        articleIsViewed: { data: null, error: action.payload }
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
        isArticleRequest: false,
      };
    case DELETE_ARTICLE_SUCCESS:
      state.allArticles.map((value, index) => {
        if (value.id === action.payload) {
          state.allArticles.splice(index, 1);
        }
        return value;
      });
      return {
        ...state,
        isArticleRequest: false,
        articleIsViewed: { data: null, error: null, }
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isArticleRequest: false,
      };
    default:
      return state;
  }
};
