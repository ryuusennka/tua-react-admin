/*
 * @Author: ryuusennka
 * @Date: 2021-07-13 05:06:08
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-27 15:27:34
 * @FilePath: /tua-react-admin/src/components/dropdown/dropdown.js
 * @Description:
 */
import React, { useRef } from 'react';
import './dropdown.scss';

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', e => {
    // user click toggle
    // NOTE: 使用 contains来判断子元素来toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active');
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove('active');
      }
    }
  });
};

function Dropdown(props) {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);
  clickOutsideRef(dropdown_content_el, dropdown_toggle_el); // 放在这里直接就执行了啊
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : null}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : null}
        {props.customToggle ? props.customToggle() : null}
      </button>
      {/* 下拉 距离上面图标 5px */}
      <div ref={dropdown_content_el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : null}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
