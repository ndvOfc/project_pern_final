import { INIT_USER, LOGOUT_USER } from '../actionTypes/userAT';

const userState = { user: [], message: '', isAuthenticated: false };
// eslint-disable-next-line default-param-last
export function userReducer(state = userState, action) {
  switch (action.type) {
    case INIT_USER:
      return { ...state, message: action.payload.message, isAuthenticated: true };

    case LOGOUT_USER:
      return { ...state, user: [], isAuthenticated: false };
    default:
      return state;
  }
}
