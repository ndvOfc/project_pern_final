/* eslint-disable no-unused-vars */
import { Provider, useDispatch, useSelector } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import BasicAssessment from '../BasicAssessment/BasicAssessment';
import Private from '../Private/Private';
import { fetchAuthPassportJs } from '../../redux/thunk/userAsyncAction';

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const selector = useSelector((state) => state.userReducer);
  console.log(selector);
  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(fetchAuthPassportJs());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* {isAuthenticated ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/modules/" element={<Modules />} />
            <Route path="/modules/" element={<Navigate to="/modules/JavaScript" replace />} />
            <Route path="/modules/:moduleTopics" element={<Modules />} />
            <Route path="/modules/:moduleTopics/:topic" element={<BasicAssessment />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Registration />} />
          </>
        )} */}

        {/* ВТОРАЯ ВЕРСИЯ  */}
        {/* {!isAuthenticated && <Route path="/login" element={<Login />} />} */}
        {/* {!isAuthenticated && <Route path="/" element={<Registration />} />} */}

        {/*    <Route element={<Private auth={isAuthenticated} />}>
          {/* <Nav /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/modules/" element={<Modules />} /> */}
        {/* <Route path="/modules/" element={<Navigate to="/modules/JavaScript" replace />} /> */}
        {/* <Route path="/modules/:moduleTopics" element={<Modules />} /> */}
        {/* <Route path="/modules/:moduleTopics/:topic" element={<BasicAssessment />} /> */}
        {/* </Route> */}

        {/*  <Route element={<Private auth={isAuthenticated} />}>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route> */}

        {/* ПЕРВАЯ ВЕРСИЯ */}
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
