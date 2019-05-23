import axios from '../../lib/axios';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_FOLLOWINGS_SUCCESS, GET_FOLLOWINGS_FAILURE } from './actionTypes';

export const getUserProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getFollowingsSuccess = following => ({
  type: GET_FOLLOWINGS_SUCCESS,
  payload: following,
});

export const getFollowingsFailure = following => ({
  type: GET_FOLLOWINGS_FAILURE,
  payload: following,
});

export const getUserProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});

export const getProfile = (id = null, route = 'profile') => async dispatch => {
  const profileURL = !id || id === undefined ? `/${route}` : `/${route}/${id}`;
  try {
    const { data: { data: { user } } } = await axios.get(profileURL);
    return dispatch(getUserProfileSuccess(user));
  } catch (error) {
    dispatch(getUserProfileFailure(error.response.data));
  }
};

export const getFollowings = () => async dispatch => {
  try {
    const { data: { data: { following } } } = await axios.get('/followings');
    return dispatch(getFollowingsSuccess(following));
  } catch (error) {
    dispatch(getFollowingsFailure(error.response.data));
  }
};

export const followOrUnfollow = userId => async dispatch => {
  try {
    const { status, data } = await axios.post(`/followers/${userId}/follow`);
    return getFollowings();
  } catch (error) {
    dispatch(getFollowingsFailure(error.response.data));
  }
};
