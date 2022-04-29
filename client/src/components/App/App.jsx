import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';
import Login from '../login/Login';
import Modules from '../Modules/Modules';
import Registration from '../Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modules" element={<Modules />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
