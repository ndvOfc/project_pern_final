import { combineReducers } from 'redux';
import { initReducer } from './initReducer';
import { modulesReducer } from './modulesReducer';

export const rootReducer = combineReducers({
  initReducer,
  modulesReducer,
});
