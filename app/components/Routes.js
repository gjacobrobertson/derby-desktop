/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import BoutRoutes from './bout/BouteRoutes';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/bout" component={BoutRoutes} />
  </Switch>
);
