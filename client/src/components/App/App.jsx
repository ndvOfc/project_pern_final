import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">Hello1212 World</div>
        <h2>Lorem ipsum dolor.</h2>
        <h2>Quam, ratione velit?</h2>
        <h2>Dicta error, tenetur.</h2>
        <h2>Eum, quibusdam velit?</h2>
        <Routes>
          <Route />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
