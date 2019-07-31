import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/Global';
import theme from './lib/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
