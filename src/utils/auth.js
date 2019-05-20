import store from '../state/store';
import axios from '../lib/axios';
import { decodeToken } from '../lib/auth';
import { signInSuccess } from '../state/auth/action';

export default () => {
  const authToken = localStorage.getItem('ah-token');
  if (authToken) {
    const decoded = decodeToken(authToken);
    store.dispatch(signInSuccess(decoded));
  }
};
