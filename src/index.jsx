import 'focus-visible/dist/focus-visible';
import './lib/styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ThemeProvider as EThemeProvider } from '@emotion/react';
import { theme, WithToasts, setAppElement } from './lib';

setAppElement('#root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <EThemeProvider theme={theme}>
      <BrowserRouter>
        <WithToasts>
          <App />
        </WithToasts>
      </BrowserRouter>
    </EThemeProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
