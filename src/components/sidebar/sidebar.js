/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 07:13:53
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-07-09 10:04:53
 * @FilePath: /tua-react-admin/src/components/sidebar/Sidebar.js
 * @Description:
 */
import React from 'react';

import logo from '../../assets/images/logo.png';

import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './sidebar.scss';

const SidebarItem = props => {
  const isActived = props.active ? 'active' : '';
  return (
    <div className="sidebar__item">
      <div className={classNames(`sidebar__item-inner`, isActived)}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = props => {
  // 让组件去判断path是否相同
  const activeIndex = sidebar_items.findIndex(
    item => item.route === props.location.pathname
  );
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items.map((item, index) => {
        return (
          <Link to={item.route} key={index}>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeIndex}
            ></SidebarItem>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
