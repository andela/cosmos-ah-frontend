import { getAllArticles } from '../../lib/article';
import { CREATE_ARTICLE_SUCCESS, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE } from './actionTypes';

export const getArticles = articles => ({
  type: GET_ARTICLE_SUCCESS,
  payload: articles.data.data
});
export const getArticlesFailure = () => ({
  type: GET_ARTICLE_FAILURE,
});


export const getArticleAction = () => async dispatch => {
  try {
    const allArticles = await getAllArticles();
    dispatch(getArticles(allArticles));
  } catch (error) {
    dispatch(getArticlesFailure());
  }
};
