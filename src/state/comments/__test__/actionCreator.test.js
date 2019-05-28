import {
  getArticleCommentsFailure,
  createArticleCommentSuccess
} from '../actions';
import { GET_ARTICLE_COMMENT_FAILURE, CREATE_ARTICLE_COMMENT_SUCCESS } from '../actionTypes';

describe('GETTING A COMMENT STATE ACTIONS', () => {
  const payload = {
    body: 'new comment',
  };

  it('Should create action to send request for new comment', () => {
    const result = {
      type: CREATE_ARTICLE_COMMENT_SUCCESS,
      payload,
    };
    expect(createArticleCommentSuccess(payload)).toEqual(result);
  });

  it('Should create an action for error ', () => {
    let error;
    const result = {
      type: GET_ARTICLE_COMMENT_FAILURE,
      error,
    };
    expect(getArticleCommentsFailure(error)).toEqual(result);
  });
});
