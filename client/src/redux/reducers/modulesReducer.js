import { INIT_MODULES } from '../actionTypes/modulesAT';

const initialState = { modules: [] };
export function modulesReducer(action, state = initialState) {
  console.log(action);
  switch (action.type) {
    case INIT_MODULES:
      return { ...state, modules: action.payload };
    default:
      return state;
  }
}
