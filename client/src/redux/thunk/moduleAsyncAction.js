import { initModulesAC, initTopicAC } from '../actionCreators/modulesAC';

export const getModules = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/modules/')
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((data) => dispatch(initModulesAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const getTopics = (moduleTopics) => {
  return (dispatch) => {
    fetch(`http://localhost:5001/api/modules/${moduleTopics}`)
      .then((res) => res.json())
      .then((res) => {
        const arr = [];
        res.map((el) =>
          arr.push({
            topicTitle: el['JSmodule.titleThemes'],
            topicId: el['JSmodule.id'],
            paramData: el['JSmodule.paramData'],
          })
        );
        return arr;
      })
      .then((data) => dispatch(initTopicAC(data)))
      .catch((err) => console.log(err.message));
  };
};
