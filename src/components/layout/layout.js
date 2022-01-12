/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 06:44:51
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-28 03:18:46
 * @FilePath: /tua-react-admin/src/components/layout/layout.js
 * @Description:
 */
import './layout.scss';

import * as ThemeAction from '../../redux/action/ThemeAction';

import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Routes from '../routes';
import Sidebar from '../sidebar/sidebar';
import Topnav from '../topnav/topnav';
import classNames from 'classnames';

const Layout = () => {
  const themeState = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode');
    const colorClass = localStorage.getItem('colorMode');

    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={props => (
          <div
            className={classNames('layout', themeState.mode, themeState.color)}
          >
            <Sidebar {...props}></Sidebar>
            <div className="layout__content">
              <Topnav />
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
