import { theme, ToastProvider, setAppElement } from './lib';
import './lib/styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';

setAppElement('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
