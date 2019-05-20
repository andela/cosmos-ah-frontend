import axios from '../../lib/axios';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';

export const getUserProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
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
