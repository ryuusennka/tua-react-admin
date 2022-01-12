/*
 * @Author: ryuusennka
 * @Date: 2021-08-27 17:00:36
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-27 17:03:28
 * @FilePath: /tua-react-admin/src/components/status-card/statusCard.js
 * @Description:
 */
import './statusCard.scss';

import React from 'react';

const StatusCard = props => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="status-card__info">
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
