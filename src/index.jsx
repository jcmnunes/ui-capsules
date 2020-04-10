import 'focus-visible/dist/focus-visible';
import './lib/styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme, WithToasts } from './lib';

Modal.setAppElement('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <BrowserRouter>
        <WithToasts>
          <App />
        </WithToasts>
      </BrowserRouter>
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
