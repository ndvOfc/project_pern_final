/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';

function PrivateRoute({ auth: { isAuthenticated }, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function PrivateWrapper({ auth: { isAuthenticated } }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          <Link to="/dashboard1">Dashboard1 w/o auth</Link>{' '}
          <Link to="/dashboard2">Dashboard2 w/ auth</Link>{' '}
        </div>
        <div>
          <Link to="/dashboard3">Dashboard3 w/o auth wrapper</Link>{' '}
          <Link to="/dashboard4">Dashboard4 w/ auth wrapper</Link>{' '}
        </div>
        <Routes>
          <Route path="login" element={<h1>Login</h1>} />
          <Route
            path="/dashboard1"
            element={
              <PrivateRoute auth={{ isAuthenticated: false }}>
                <h1>Dashboard 1</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard2"
            element={
              <PrivateRoute auth={{ isAuthenticated: true }}>
                <h1>Dashboard 2</h1>
              </PrivateRoute>
            }
          />

          <Route element={<PrivateWrapper auth={{ isAuthenticated: false }} />}>
            <Route path="/dashboard3" element={<h1>Dashboard 3</h1>} />
          </Route>
          <Route element={<PrivateWrapper auth={{ isAuthenticated: true }} />}>
            <Route path="/dashboard4" element={<h1>Dashboard 4</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
