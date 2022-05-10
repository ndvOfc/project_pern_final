/* eslint-disable no-unused-vars */
import { Provider, useDispatch, useSelector } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
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
import { fetchAuthPassportJs } from '../../redux/thunk/userAsyncAction';

function App() {
  const dispatch = useDispatch();

  const [isSnackOpen, setSnackOpen] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const selector = useSelector((state) => state.userReducer);
  console.log(selector);
  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(fetchAuthPassportJs());
  }, []);

  /*  Color theme  */

  return (
    <BrowserRouter>
      {/* <Nav /> */}
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
