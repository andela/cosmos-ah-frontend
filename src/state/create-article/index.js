import { initialState } from './state';
import reducer from './reducers';

export const createArticle = {
  initialState,
  reducer,
  stateKey: 'createArticle'
};
