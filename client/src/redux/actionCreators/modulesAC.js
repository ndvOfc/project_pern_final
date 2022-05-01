// import { createAction } from '@reduxjs/toolkit';
import { INIT_MODULES } from '../actionTypes/modulesAT';

export const initModulesAC = (payload) => {
  return { type: INIT_MODULES, payload };
};

// export const initModulesAC = createAction(INIT_MODULES)
