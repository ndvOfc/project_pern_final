import { createAction } from '@reduxjs/toolkit';
import { INIT_USER, LOGOUT_USER, END_GAME } from '../actionTypes/userAT';

// export const initModulesAC = (payload) => {
//   return { type: INIT_MODULES, payload };
// };

export const initUserAC = createAction(INIT_USER);
export const logoutUserAC = createAction(LOGOUT_USER);
export const endGameUserAC = createAction(END_GAME);
