/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 06:08:37
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-07-09 09:16:14
 * @FilePath: /tua-react-admin/src/index.js
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';

import Layout from './components/layout/layout';

document.title = `Tua CRM`;

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
