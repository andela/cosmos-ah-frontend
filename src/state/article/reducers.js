import { CREATE_ARTICLE_SUCCESS, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload
      };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload
      };
    default:
      return state;
  }
};
