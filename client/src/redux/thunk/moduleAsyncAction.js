import { initModulesAC } from '../actionCreators/modulesAC';

export const getModules = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/modules')
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((data) => dispatch(initModulesAC(data)))
      .catch((err) => console.log(err.message));
  };
};
