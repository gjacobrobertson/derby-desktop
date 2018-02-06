// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import type { Match } from 'react-router';
import NewBoutPage from '../../containers/bout/NewBoutPage';
import BoutListPage from '../../containers/bout/BoutListPage';
import BoutPage from '../../containers/bout/BoutPage';

type Props = {
  match: Match
};

const BoutRoutes = (props: Props) => (
  <Switch>
    <Route exact path={props.match.url} component={BoutListPage} />
    <Route path={`${props.match.url}/new`} component={NewBoutPage} />
    <Route path={`${props.match.url}/:id`} component={BoutPage} />
  </Switch>
);

export default BoutRoutes;
