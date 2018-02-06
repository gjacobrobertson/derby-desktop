// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import type { BoutType } from '../../reducers/bout';

type Props = {
  bouts: BoutType[]
};

const BoutListItem = (bout: BoutType) => (
  <List.Item key={bout.id} as={Link} to={`/bout/${bout.id}`}>
    <List.Content>
      <List.Header>{bout.name}</List.Header>
    </List.Content>
  </List.Item>
);

const BoutList = (props: Props) => {
  const { bouts } = props;
  const items = bouts.map(BoutListItem);
  return (
    <List divided relaxed>{items}</List>
  );
};

export default BoutList;
