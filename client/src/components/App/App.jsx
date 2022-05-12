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
// import BasicAssessment2 from '../BasicAssessment/BasicAssessment2';
import { fetchAuthPassportJs, fetchAuth } from '../../redux/thunk/userAsyncAction';
import Loader from '../UI/Loader/Loader';

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, isloaded } = useSelector((state) => state.userReducer);
  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(fetchAuth());
    dispatch(fetchAuthPassportJs());
  }, [dispatch]);

  // if (!isloaded) return <Loader />; // посмотреть как реализовать

  return (
    <BrowserRouter>
      {isAuthenticated && <Nav />}
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/modules/JavaScript" replace />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/modules" element={<Modules />} /> */}
            <Route path="/modules" element={<Navigate to="/modules/JavaScript" replace />} />
            <Route path="/login" element={<Navigate to="/modules/JavaScript" replace />} />
            <Route path="/registration" element={<Navigate to="/modules/JavaScript" replace />} />
            <Route path="/modules/:moduleTopics" element={<Modules />} />
            <Route path="/modules/:moduleTopics/:topic" element={<BasicAssessment />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/registration" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
