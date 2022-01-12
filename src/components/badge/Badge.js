import './badge.scss';

/*
 * @Author: ryuusennka
 * @Date: 2021-08-27 23:41:53
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-27 23:47:14
 * @FilePath: /tua-react-admin/src/components/badge/Badge.js
 * @Description:
 */
import React from 'react';
import classNames from 'classnames';

function Badge(props) {
  return (
    <span className={classNames('badge', `badge-${props.type}`)}>
      {props.content}
    </span>
  );
}

export default Badge;
