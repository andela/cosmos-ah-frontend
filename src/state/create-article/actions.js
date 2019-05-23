import {
  SET_ARTICLE_TITLE,
  SET_ARTICLE_BODY,
  SET_ARTICLE_TAGS,
  SET_ARTICLE_IMAGES,
  SET_ARTICLE_ERROR,
  SET_ARTICLE_PUBLISH,
  SET_ARTICLE_ON_UPDATE,
} from './actionTypes';

export const setTitle = title => ({
  type: SET_ARTICLE_TITLE,
  payload: title
});

export const setBody = body => ({
  type: SET_ARTICLE_BODY,
  payload: body
});

export const setTags = tags => ({
  type: SET_ARTICLE_TAGS,
  payload: tags
});

export const setImages = images => ({
  type: SET_ARTICLE_IMAGES,
  payload: images
});

export const setPublish = check => ({
  type: SET_ARTICLE_PUBLISH,
  payload: check
});

export const setArticleUpdate = article => ({
  type: SET_ARTICLE_ON_UPDATE,
  payload: article
});

export const setError = error => ({
  type: SET_ARTICLE_ERROR,
  payload: error
});

export const setArticleTitle = title => async dispatch => dispatch(setTitle(title));
export const setArticleBody = body => async dispatch => dispatch(setBody(body));
export const setArticleTags = tags => async dispatch => dispatch(setTags(tags));
export const setArticleImages = images => async dispatch => dispatch(setImages(images));
export const setArticlePublish = check => async dispatch => dispatch(setPublish(check));
export const setArticleError = error => async dispatch => dispatch(setError(error));
export const setArticleOnUpdate = article => async dispatch => {
  const { title, body, tags, published, imageUrl } = article;
  await dispatch(setArticleUpdate({ title, body, tags, published, imageUrl, }));
};
