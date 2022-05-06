import { initUserAC, logoutUserAC } from '../actionCreators/userAC';

export const fetchRegistration = (body) => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/registration', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => dispatch(initUserAC(data)))
      .catch((err) => dispatch(err.message));
  };
};

export const fetchLogin = (body) => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.status));
      .then((data) => dispatch(initUserAC(data)))
      .catch((err) => dispatch(initUserAC(err.message)));
  };
};

export const fetchLogout = () => {
  return (dispatch) => {
    fetch('http://localhost:5001/api/logout')
      .then((res) => res.json())
      .then((data) => dispatch(initUserAC(data)))
      .catch((err) => dispatch(logoutUserAC(err.message)));
  };
};

// Метка
