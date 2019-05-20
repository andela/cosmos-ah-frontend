import { getAllArticles } from '../../lib/article';
import axios from '../../lib/axios';
import {
  CREATE_ARTICLE_SUCCESS,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAILURE,
  CREATE_ARTICLE_FAILURE,
  IS_ARTICLE_REQUEST,
  GET_ARTICLE_BY_ID_SUCCESS,
  GET_ARTICLE_BY_ID_ERROR,
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


export const getArticleByIDSuccess = article => ({
  type: GET_ARTICLE_BY_ID_SUCCESS,
  payload: article,
});

export const getArticleByIDError = error => ({
  type: GET_ARTICLE_BY_ID_ERROR,
  payload: error,
});

export const getArticleAction = () => async dispatch => {
  try {
    const allArticles = await getAllArticles();
    return dispatch(getArticles(allArticles));
  } catch (error) {
    dispatch(getArticlesFailure());
  }
};

export const createNewArticle = article => async dispatch => {
  dispatch(isArticleRequest());
  try {
    const { data } = await axios.post('/articles', article);
    await dispatch(createArticleSuccess(data));
    return data;
  } catch (error) {
    dispatch(createArticleFailure(error));
  }
};

export const getArticleByID = (articles, id) => async dispatch => {
  dispatch(isArticleRequest());
  try {
    const { data } = await axios.get(`/articles/${id}`);
    return dispatch(getArticleByIDSuccess(data));
  } catch (error) {
    dispatch(getArticleByIDError(error.response.data));
  }
};
