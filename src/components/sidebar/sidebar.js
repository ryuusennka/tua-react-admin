/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 07:13:53
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2022-01-12 16:44:34
 * @FilePath      : /tua-react-admin/src/components/sidebar/sidebar.js
 * @Description:
 */
import './sidebar.scss';

import { Link } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import logo from '../../assets/images/logo.png';
// import logo from '../../assets/images/1.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes_cn.json';

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
  // 让组件去判断 path 是否相同
  // 根据当前的页面的 url 来遍历与谁匹配
  const activeIndex = sidebar_items.findIndex(
    item => item.route === props.location.pathname // true 返回 index
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
