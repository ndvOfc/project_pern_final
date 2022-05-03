import { INIT_USER, LOGOUT_USER } from '../actionTypes/userAT';

const userState = { user: [], message: '', isAuthentificate: false };
// eslint-disable-next-line default-param-last
export function userReducer(state = userState, action) {
  // console.log(action);
  switch (action.type) {
    case INIT_USER:
      return { ...state, message: action.payload.message, isAuthentificate: true };

    case LOGOUT_USER:
      console.log(action.payload);
      return { ...state, user: [], isAuthentificate: false };
    default:
      return state;
  }
}
