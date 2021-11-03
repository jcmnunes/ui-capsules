import 'react-toastify/dist/ReactToastify.css';
import 'focus-visible/dist/focus-visible';
import './lib/styles/global.css';
import { setAppElement, ToastContainer } from './lib';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

setAppElement('#root');

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <ToastContainer />
  </>,
  document.getElementById('root'),
);
