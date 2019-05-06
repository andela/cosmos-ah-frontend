import { initialState } from './state';
import authReducer from './reducers';

export const auth = {
  initialState,
  authReducer,
  stateKey: 'auth',
};
