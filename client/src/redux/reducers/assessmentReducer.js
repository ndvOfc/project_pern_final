import { INIT_QUESTION } from '../actionTypes/assessmentAT';

const initialState = { questionList: [], currentQuestionIdx: 0 };

export function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_QUESTION:
      console.log(`PAYLOAD >>>>>>>>>> ${action.payload}`);

      return {
        ...state,
        questionList: action.payload,
      };

    default:
      return state;
  }
}
