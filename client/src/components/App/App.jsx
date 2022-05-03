/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux'; // переехал в индекс пока не разберемся кто добавил
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';
import Snack from '../Snack/Snack';

function App() {
  const [isSnackOpen, setSnackOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/:id" element={<Modules />} />
        </Routes>
      </Provider>
      {/* <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} message={message}/> */}
    </BrowserRouter>
  );
}

export default App;
