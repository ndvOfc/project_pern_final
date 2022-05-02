import { createAction } from '@reduxjs/toolkit';
import { INIT_MODULES, INIT_TOPIC } from '../actionTypes/modulesAT';

// export const initModulesAC = (payload) => {
//   return { type: INIT_MODULES, payload };
// };

export const initModulesAC = createAction(INIT_MODULES);
export const initTopicAC = createAction(INIT_TOPIC);
