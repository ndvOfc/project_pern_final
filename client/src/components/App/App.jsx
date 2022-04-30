/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';
import Login from '../login/Login';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import Registration from '../Registration/Registration';
import { AccountProfile } from '../Test/accunprofile';

function App() {
  const user = 1;
  return (
    <BrowserRouter>
      {/* <AccountProfile /> */}

      <Provider store={store}>
        {user ? (
          <>
            <Nav />
            <Profile />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        )}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
