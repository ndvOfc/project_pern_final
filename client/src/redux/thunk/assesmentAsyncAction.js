import { initQuestionAC } from '../actionCreators/assessmentAC';

export const getQuestions = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/modules/:module/:topic');
  };
};
