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

export const createArticleCommentSuccess = body => ({
  type: CREATE_ARTICLE_COMMENT_SUCCESS,
  payload: body
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

export const createArticleCommentAction = (body, articleId) => async dispatch => {
  try {
    const { data: { data } } = await axios.post(`/articles/${articleId}/comments`, { body, articleId });
    dispatch(createArticleCommentSuccess(data));
  } catch (error) {
    dispatch(createArticleCommentFailure(error));
  }
};
