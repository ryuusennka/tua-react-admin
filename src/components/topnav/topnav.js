/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 10:10:42
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2022-01-12 16:44:59
 * @FilePath      : /tua-react-admin/src/components/topnav/topnav.js
 * @Description:
 */
import './topnav.scss';

import Dropdown from '../dropdown/dropdown';
import { Link } from 'react-router-dom';
import React from 'react';
import ThemeMenu from '../themeMenu/ThemeMenu';
// 引入 mock 数据
import notification from '../../assets/JsonData/notification.json';
import user_image from '../../assets/images/avatar.png';
import user_menu from '../../assets/JsonData/user_menus.json';

const curr_user = {
  display_name: 'ryuusennka',
  image: user_image,
};

// 下拉列表中的 item
const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = user => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="avatar" />
    </div>
    <div className="topnav__right-user__name">{curr_user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notification}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
