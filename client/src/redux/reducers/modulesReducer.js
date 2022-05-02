import { INIT_MODULES } from '../actionTypes/modulesAT';

const initialState = { modules: [] };
// eslint-disable-next-line default-param-last
export function modulesReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case INIT_MODULES:
      return { ...state, modules: action.payload };
    default:
      return state;
  }
}
