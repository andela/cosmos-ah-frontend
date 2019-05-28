import axios from '../../lib/axios';
import { GET_FEEDS_SUCCESS, GET_FEEDS_FAILURE } from './actionTypes';

export const getFeedsSuccess = feeds => ({
  type: GET_FEEDS_SUCCESS,
  payload: feeds,
});
export const getFeedsFailure = error => ({
  type: GET_FEEDS_FAILURE,
  payload: error,
});

export const getFeeds = () => async dispatch => {
  try {
    const { data: { data } } = await axios.get('/feeds');
    return dispatch(getFeedsSuccess(data));
  } catch (error) {
    dispatch(getFeedsFailure(error.response.data));
  }
};
