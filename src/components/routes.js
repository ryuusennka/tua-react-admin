/*
 * @Author: ryuusennka
 * @Date: 2021-07-09 07:11:44
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-02 05:16:10
 * @FilePath: /tua-react-admin/src/components/routes.js
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
      <Route path="*" render={() => <h5>page not found</h5>}></Route>
    </Switch>
  );
};

export default Routes;
