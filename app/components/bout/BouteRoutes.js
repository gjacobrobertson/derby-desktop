// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import type { Match } from 'react-router';
import { NewBout, BoutList, Bout } from '../../containers/bout';

type Props = {
  match: Match
};

const BoutRoutes = (props: Props) => (
  <Switch>
    <Route exact path={props.match.url} component={BoutList} />
    <Route path={`${props.match.url}/new`} component={NewBout} />
    <Route path={`${props.match.url}/:id`} component={Bout} />
  </Switch>
);

export default BoutRoutes;
