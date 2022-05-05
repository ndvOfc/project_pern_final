import { INIT_QUESTION } from '../actionTypes/assessmentAT';

const initialState = { questions: [] };

export function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_QUESTION:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
