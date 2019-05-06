import { combineReducers } from 'redux';

import alert from './alert';
import registration from './registration';

const authReducer = combineReducers({
  registration,
  alert,
});

export default authReducer;
