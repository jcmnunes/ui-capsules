import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/Global';
import theme from './lib/theme';
import { WithToasts } from './lib/Toaster/Toaster';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <BrowserRouter>
        <WithToasts>
          <App />
        </WithToasts>
      </BrowserRouter>
      <GlobalStyle />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
