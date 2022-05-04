import { combineReducers } from 'redux';
import { initReducer } from './initReducer';
import { modulesReducer } from './modulesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  initReducer,
  modulesReducer,
  userReducer,
});
