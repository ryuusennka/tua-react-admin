/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 06:08:37
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-09-14 12:23:30
 * @FilePath: /tua-react-admin/src/index.js
 * @Description:
 */
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/index.css';
import './assets/css/theme.css';

import Layout from './components/layout/layout';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer);

document.title = `Admin CRM`;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
