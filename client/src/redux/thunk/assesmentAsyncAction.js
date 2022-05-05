import { initQuestionAC } from '../actionCreators/assessmentAC';

export const getQuestions = (moduleTopics, topic) => {
  return (dispatch) => {
    fetch(`http://localhost:5001/api/modules/${moduleTopics}/${topic}`)
      .then((res) => res.json())
      .then((data) => dispatch(initQuestionAC(data)));
  };
};
