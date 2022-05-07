import { INIT_USER, LOGOUT_USER } from '../actionTypes/userAT';

const userState = { user: [], message: '', isAuthenticated: false };
// eslint-disable-next-line default-param-last
export function userReducer(state = userState, action) {
  switch (action.type) {
    case INIT_USER:
      if (action.payload.status === 200) {
        return {
          ...state,
          message: action.payload.message,
          status: action.payload.status,
          isAuthenticated: true,
        };
      }
      return { ...state, message: action.payload.message, isAuthenticated: true };

    case LOGOUT_USER:
      return { ...state, user: [], message: [], isAuthenticated: false };
    default:
      return state;
  }
}
