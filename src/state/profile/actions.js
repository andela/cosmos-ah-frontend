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

export const getProfile = (route = 'profile') => async dispatch => {
  try {
    const { data: { data: { user } } } = await axios.get(`/${route}`);
    dispatch(getUserProfileSuccess(user));
  } catch (error) {
    dispatch(getUserProfileFailure(error.response.data));
  }
};
