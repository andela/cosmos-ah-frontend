import { SOCIAL_AUTH, SIGN_IN_ERROR } from './actionTypes';
import { decodeToken, setLocalStorage } from '../../lib/social';

export const getSocialAuth = decodedToken => (
  {
    type: SOCIAL_AUTH,
    payload: decodedToken
  }
);

export const signInError = signinError => ({
  type: SIGN_IN_ERROR,
  payload: signinError
});

export const socialAuth = token => dispatch => {
  setLocalStorage(token, 'loggedinUser');
  const decodedToken = decodeToken(token);

  try {
    dispatch(getSocialAuth(decodedToken));
  } catch (error) {
    dispatch(signInError(error));
  }
};
