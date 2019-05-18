import { getArticleByIDSuccess, getArticleByIDError } from '../../article/actions';
import { GET_ARTICLE_BY_ID_SUCCESS, GET_ARTICLE_BY_ID_ERROR } from '../../article/actionTypes';

describe('GETTING AN ARTICLE TO STATE ACTIONS', () => {
  it('Should create an action for successful retrieval of Single Article', () => {
    const payload = {
      name: 'test'
    };
    const result = {
      type: GET_ARTICLE_BY_ID_SUCCESS,
      payload,
    };
    expect(getArticleByIDSuccess(payload)).toEqual(result)
  })
  it('Should create an action for error in retrieval of Single Article', () => {
    const payload = {
      error: true
    };
    const result = {
      type: GET_ARTICLE_BY_ID_ERROR,
      payload,
    };
    expect(getArticleByIDError(payload)).toEqual(result)
  })
});
