/* eslint-disable no-unused-vars */
import { Provider, useSelector } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';
import Snack from '../Snack/Snack';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';

function App() {
  const [isSnackOpen, setSnackOpen] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  console.log(isAuthenticated);

  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Nav /> : <Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:moduleTopics" element={<Modules />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
