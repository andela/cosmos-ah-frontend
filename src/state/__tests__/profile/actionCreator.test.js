import { getUserProfileSuccess, getUserProfileFailure, } from '../../profile/actions';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../../profile/actionTypes';

describe('PROFILE STATE ACTIONS', () => {
  it('Should create an action for successful retrieval of User Profile', () => {
    const payload = {
      name: 'test'
    };
    const result = {
      type: GET_PROFILE_SUCCESS,
      payload,
    };
    expect(getUserProfileSuccess(payload)).toEqual(result)
  })
  it('Should create an action for error in retrieval of User Profile', () => {
    const payload = {
      error: true
    };
    const result = {
      type: GET_PROFILE_FAILURE,
      payload,
    };
    expect(getUserProfileFailure(payload)).toEqual(result)
  })
});
