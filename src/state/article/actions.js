import { getAllArticles } from '../../lib/article';
import axios from '../../lib/axios';
import {
  CREATE_ARTICLE_SUCCESS,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
  CREATE_ARTICLE_FAILURE,
  IS_ARTICLE_REQUEST,
} from './actionTypes';

export const createArticleSuccess = article => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload: article,
});

export const createArticleFailure = error => ({
  type: CREATE_ARTICLE_FAILURE,
  payload: error,
});

export const getArticles = articles => ({
  type: GET_ARTICLE_SUCCESS,
  payload: articles.data.data
});

export const getArticlesFailure = () => ({
  type: GET_ARTICLE_FAILURE,
});

export const isArticleRequest = () => ({
  type: IS_ARTICLE_REQUEST,
});


export const getArticleAction = () => async dispatch => {
  try {
    const allArticles = await getAllArticles();
    dispatch(getArticles(allArticles));
  } catch (error) {
    dispatch(getArticlesFailure());
  }
};


export const createNewArticle = (article, history = null) => async dispatch => {
  dispatch(isArticleRequest());
  try {
    const { data } = await axios.post('/articles', article);
    await dispatch(createArticleSuccess(data));
    return history.push(`/article/${data.data.id}`);
  } catch (error) {
    dispatch(createArticleFailure(error));
  }
};
