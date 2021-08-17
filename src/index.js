import React from 'react';
import ReactDOM from 'react-dom';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './sass/index.scss'
// import * as serviceWorker from "./serviceWorker";
import Layout from './components/Layout'



ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
