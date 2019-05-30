import { getFollowingsSuccess, getFollowingsFailure, } from '../../profile/actions';
import { GET_FOLLOWINGS_SUCCESS, GET_FOLLOWINGS_FAILURE } from '../../profile/actionTypes';

describe('User Followings State Actions', () => {
  it('Should create an action for successful retrieval of User followings', () => {
    const payload = {
      name: 'test'
    };
    const result = {
      type: GET_FOLLOWINGS_SUCCESS,
      payload,
    };
    expect(getFollowingsSuccess(payload)).toEqual(result)
  })
  it('Should create an action for error in retrieval of User followings', () => {
    const payload = {
      error: true
    };
    const result = {
      type: GET_FOLLOWINGS_FAILURE,
      payload,
    };
    expect(getFollowingsFailure(payload)).toEqual(result)
  })
});
