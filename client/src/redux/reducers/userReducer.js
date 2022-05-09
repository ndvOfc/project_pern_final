import { END_GAME, INIT_USER, LOGOUT_USER } from '../actionTypes/userAT';

const userState = {
  user: { name: '', image: '' },
  message: '',
  isAuthenticated: false,
  statistic: { progress: 0, theme: '' },
};
// eslint-disable-next-line default-param-last
export function userReducer(state = userState, action) {
  switch (action.type) {
    case INIT_USER:
      // console.log(action.payload);
      if (action.payload.status === 200) {
        return {
          ...state,
          message: action.payload.message,
          status: action.payload.status,
          isAuthenticated: false,
        };
      }
      return { ...state, message: action.payload.message, isAuthenticated: false };

    case END_GAME:
      return { ...state, statistic: action.payload.statistic, user: action.payload.user };

    case LOGOUT_USER:
      return { ...state, user: [], message: [], isAuthenticated: false };
    default:
      return state;
  }
}
