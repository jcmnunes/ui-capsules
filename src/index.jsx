import 'react-toastify/dist/ReactToastify.css';
import 'focus-visible/dist/focus-visible';
import '@reach/menu-button/styles.css';
import '@reach/tooltip/styles.css';
import './lib/styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
