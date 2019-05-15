import { CREATE_ARTICLE_SUCCESS, GET_ARTICLE_SUCCESS, IS_ARTICLE_REQUEST, } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        allArticles: [
          action.payload.data,
          ...state.allArticles
        ],
        isArticleRequest: false,
      };
    case IS_ARTICLE_REQUEST:
      return {
        allArticles: [
          ...state.allArticles
        ],
        isArticleRequest: true,
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
