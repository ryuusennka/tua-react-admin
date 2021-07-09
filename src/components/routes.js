/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 07:11:44
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-07-09 09:14:25
 * @FilePath: /tua-react-admin/src/components/Routes.js
 * @Description:
 */

import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Customers from '../pages/customers';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/customers" component={Customers}></Route>
    </Switch>
  );
};

export default Routes;
