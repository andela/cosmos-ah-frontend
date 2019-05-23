import {
  CREATE_ARTICLE_COMMENT_SUCCESS,
  CREATE_ARTICLE_COMMENT_FAILURE,
  GET_ARTICLE_COMMENT_SUCCESS,
  GET_ARTICLE_COMMENT_FAILURE
} from './actionTypes';

import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_COMMENT_SUCCESS:
      return {
        ...state,
        allComments: [
          ...state.articleComments,
          action.payload.data,
        ],
      };
    case CREATE_ARTICLE_COMMENT_FAILURE:
      return {
        ...state,
        allComments: [
          ...state.articleComments,
          action.payload.data,
        ],
      };
    case GET_ARTICLE_COMMENT_SUCCESS:
      return {
        ...state,
        allComments: [
          ...state.allComments,
          action.payload
        ]
      };
    case GET_ARTICLE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
