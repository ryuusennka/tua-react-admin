/*
 * @Author: ryuusennka
 * @Date: 2021-08-28 02:32:21
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-28 03:08:10
 * @FilePath: /tua-react-admin/src/redux/reducer/ThemeReducer.js
 * @Description:
 */

const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
export default ThemeReducer;
