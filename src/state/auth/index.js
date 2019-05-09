import { initialState } from './state';
import reducer from './reducers';

export const auth = {
  initialState,
  reducer,
  stateKey: 'auth'
};
