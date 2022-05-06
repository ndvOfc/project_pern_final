import { INIT_QUESTION, NEXT_QUESTION } from '../actionTypes/assessmentAT';

const initialState = { questions: [], currentQuestionIdx: 0 };

export function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_QUESTION:
      // console.log(`PAYLOAD >>>>>>>>>> ${action.payload.questions[0].question}`);
      // console.log(`STATE >>>>>>>>>> ${state.currentQuestionIdx}`);
      return {
        ...state,
        questions: [
          {
            questions: action.payload.questions,
            answers: action.payload.answers,
            currentQuestionIdx: state.currentQuestionIdx,
          },
        ],
      };
    case NEXT_QUESTION:
      console.log(`STATE>>>>>>>>>>>> ${state.questions.questions}`);
      console.log(`current index >>>>>>>>>> ${state.currentQuestionIdx}`);
      return {
        ...state,
        questions: {
          questions: state.questions.questions,
          currentQuestionIdx: state.currentQuestionIdx + 1,
        },
      };
    default:
      return state;
  }
}
