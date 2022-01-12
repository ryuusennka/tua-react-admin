/*
 * @Author: ryuusennka
 * @Date: 2021-08-28 02:32:06
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-28 03:19:01
 * @FilePath: /tua-react-admin/src/redux/action/ThemeAction.js
 * @Description:
 */
export const setMode = mode => {
  return {
    type: 'SET_MODE',
    payload: mode,
  };
};
export const setColor = color => {
  return {
    type: 'SET_COLOR',
    payload: color,
  };
};
export const getTheme = () => ({ type: 'GET_THEME' });
