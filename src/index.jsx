import 'react-toastify/dist/ReactToastify.css';
import 'focus-visible/dist/focus-visible';
import './lib/styles/global.css';
import { theme, ToastContainer, setAppElement } from './lib';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';

setAppElement('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <ToastContainer />
  </ThemeProvider>,
  document.getElementById('root'),
);
