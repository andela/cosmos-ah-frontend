import { SOCIAL_AUTH } from './actionTypes';
import { decodeToken } from '../../lib/social';

export const socialAuth = token => dispatch => {
  const decodedToken = decodeToken(token);
  try {
    dispatch({
      type: SOCIAL_AUTH,
      payload: decodedToken
    });
  } catch (error) {
    throw error;
  }
};
