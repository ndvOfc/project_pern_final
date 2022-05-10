import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import App from './components/App/App';
import { store } from './store/index';
import { theme } from './components/UI/Theme';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
