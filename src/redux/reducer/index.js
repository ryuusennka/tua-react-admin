/*
 * @Author: ryuusennka
 * @Date: 2021-08-28 02:32:14
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-28 02:37:27
 * @FilePath: /tua-react-admin/src/redux/reducer/index.js
 * @Description:
 */

import ThemeReducer from './ThemeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ ThemeReducer });

export default rootReducer;
