/*
 * @Author: ryuusennka
 * @Date: 2021-08-27 23:14:05
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-28 00:28:59
 * @FilePath: /tua-react-admin/src/components/table/Table.js
 * @Description:
 */

import './table.scss';

import React, { useState } from 'react';

import classNames from 'classnames';

function Table(props) {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  let pages = 1;
  let range = [];
  if (props.limit !== undefined) {
    // NOTE: 计算总页数
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    // NOTE: 分页,看除不除得尽，除不尽，说明需要页码+1
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    // NOTE: 这是简单的迭代器，如： Array(10).keys()，这样就有一个由索引组成的迭代器
    range = [...Array(pages).keys()]; // 页码 length
  }

  const selectPage = page => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);
    setDataShow(props.bodyData.slice(start, end));
    setCurrPage(page);
  };

  const [currPage, setCurrPage] = useState(0);
  return (
    <div>
      <div className="table-wrapper">
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {/* loop th */}
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
        {pages > 1 ? (
          <div className="table__pagination">
            {range.map((item, index) => (
              <div
                className={classNames(
                  `table__pagination-item`,
                  currPage === index ? 'active' : ''
                )}
                key={index}
                onClick={() => selectPage(index)}
              >
                {item + 1}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Table;
