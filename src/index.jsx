import 'focus-visible/dist/focus-visible';
import './lib/styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme, WithToasts, setAppElement } from './lib';

setAppElement('#root');

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
