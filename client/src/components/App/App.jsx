/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';
import Snack from '../Snack/Snack';
import BasicAssessment from '../BasicAssessment/BasicAssessment';

function App() {
  const [isSnackOpen, setSnackOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
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
