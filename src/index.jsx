import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/Global';
import theme from './lib/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <App />
      <GlobalStyle />
    </div>
  </ThemeProvider>,
  document.getElementById('root'),
);
