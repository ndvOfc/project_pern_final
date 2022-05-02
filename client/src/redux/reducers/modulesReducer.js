import { INIT_MODULES, INIT_TOPIC } from '../actionTypes/modulesAT';

const initialState = { modules: [] };
// eslint-disable-next-line default-param-last
export function modulesReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case INIT_MODULES:
      return { ...state, modules: action.payload };
    case INIT_TOPIC:
      return { ...state, topic: action.payload };
    default:
      return state;
  }
}
