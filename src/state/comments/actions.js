import { getAllArticles } from '../../lib/article';
import axios from '../../lib/axios';
import {
  GET_ARTICLE_COMMENT_SUCCESS,
  GET_ARTICLE_COMMENT_FAILURE,
  CREATE_ARTICLE_COMMENT_SUCCESS,
  CREATE_ARTICLE_COMMENT_FAILURE
} from './actionTypes';


export const getArticleCommentsSuccess = comments => ({
  type: GET_ARTICLE_COMMENT_SUCCESS,
  payload: comments.data.data
});

export const getArticleCommentsFailure = error => ({
  type: GET_ARTICLE_COMMENT_FAILURE,
  payload: error
});

export const createArticleCommentSuccess = payload => ({
  type: CREATE_ARTICLE_COMMENT_SUCCESS,
  payload,
});

export const createArticleCommentFailure = error => ({
  type: CREATE_ARTICLE_COMMENT_FAILURE,
  payload: error
});


export const getArticleCommentsAction = articleId => async dispatch => {
  try {
    const allComments = await axios.get(`/articles/${articleId}/comments`);
    dispatch(getArticleCommentsSuccess(allComments));
  } catch (error) {
    dispatch(getArticleCommentsFailure(error));
  }
};
