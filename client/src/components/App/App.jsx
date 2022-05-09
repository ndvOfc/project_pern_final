/* eslint-disable no-unused-vars */
import { Provider, useSelector } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';
import Snack from '../Snack/Snack';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import BasicAssessment from '../BasicAssessment/BasicAssessment';

function App() {
  const [isSnackOpen, setSnackOpen] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  console.log(isAuthenticated);

  // после того как получится нужно перенести в санку
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< GETUSER FUNC');
  //   fetch('http://localhost:5001/auth/login/success', {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       // 'Access-Control-Allow-Origin': 'http://localhost:3000',
  //       'Access-Control-Allow-Credentials': true,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 200) return res.json();
  //       throw new Error('authentication has been failed!');
  //     })
  //     .then((data) => {
  //       setUser(data.user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  //
  // console.log(user);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Nav /> : <Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/modules/" element={<Modules />} /> */}
        {/* если багов не выявится то удалить строчку выше и оставить вариант с Navigate */}
        <Route path="/modules/" element={<Navigate to="/modules/JavaScript" replace />} />
        <Route path="/modules/:moduleTopics" element={<Modules />} />
        <Route path="/modules/:moduleTopics/:topic" element={<BasicAssessment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
