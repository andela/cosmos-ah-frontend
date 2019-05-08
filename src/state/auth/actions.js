import { SOCIAL_AUTH } from './actionTypes';
import { decodeToken } from '../../lib/social';

export const getSocialAuth = token => {
  const decodedToken = decodeToken(token);
  return {
    type: SOCIAL_AUTH,
    payload: decodedToken
  };
};

export const socialAuth = token => dispatch => {
  try {
    dispatch(getSocialAuth(token));
  } catch (error) {
    throw error;
  }
};
