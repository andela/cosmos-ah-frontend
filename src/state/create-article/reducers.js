import {
  SET_ARTICLE_TITLE,
  SET_ARTICLE_BODY,
  SET_ARTICLE_TAGS,
  SET_ARTICLE_IMAGES,
  SET_ARTICLE_PUBLISH
} from './actionTypes';

import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE_TITLE:
      return {
        ...state,
        article: { ...state.article, title: action.payload },
      };
    case SET_ARTICLE_BODY:
      return {
        ...state,
        article: { ...state.article, body: action.payload },
      };
    case SET_ARTICLE_TAGS:
      return {
        ...state,
        article: { ...state.article, tags: action.payload },
      };
    case SET_ARTICLE_IMAGES:
      return {
        ...state,
        article: { ...state.article, imageUrl: action.payload },
      };
    case SET_ARTICLE_PUBLISH:
      return {
        ...state,
        article: { ...state.article, published: action.payload },
      };
    default:
      return state;
  }
};
