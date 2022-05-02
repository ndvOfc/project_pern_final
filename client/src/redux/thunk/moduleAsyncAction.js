import { initModulesAC, initTopicAC } from '../actionCreators/modulesAC';

export const getModules = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/modules')
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((data) => dispatch(initModulesAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const getTopics = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/modules/1')
      .then((res) => res.json())
      .then((data) => dispatch(initTopicAC(data)))
      .catch((err) => console.log(err.message));
  };
};
