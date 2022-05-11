import { END_GAME, INIT_USER, LOGOUT_USER } from '../actionTypes/userAT';

const userState = {
  user: { name: '', image: '' },
  message: '',
  status: '',
  isloaded: false,
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
          user: action.payload.user,
          isAuthenticated: true,
          isloaded: true,
        };
      }
      return { ...state, message: action.payload.message, isAuthenticated: false };

    case END_GAME:
      return { ...state, statistic: action.payload.statistic, user: action.payload.user };

    case LOGOUT_USER:
      console.log('123');
      return { ...state, ...userState };
    default:
      return state;
  }
}
