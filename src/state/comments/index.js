import { initialState } from './state';
import reducer from './reducer';

export const comment = {
  initialState,
  reducer,
  stateKey: 'comments'
};
