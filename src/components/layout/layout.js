/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 06:44:51
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-07-09 09:15:45
 * @FilePath: /tua-react-admin/src/components/layout/Layout.js
 * @Description:
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar';
import Routes from '../routes';

import './layout.scss';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={props => (
          <div className="layout">
            <Sidebar {...props}></Sidebar>
            <div className="layout__content">
              <div className="layout__content-main">
                {/* 自定义组件 */}
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};
export default Layout;
