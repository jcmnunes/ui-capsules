import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UiCaps } from './lib';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UiCaps>
        <App />
      </UiCaps>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
