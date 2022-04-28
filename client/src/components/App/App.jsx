import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">Hello World</div>
        <Routes>
          <Route />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
