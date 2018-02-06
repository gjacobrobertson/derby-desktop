// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import Routes from './Routes';

type Props = {};

export default class App extends React.Component<Props> {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Link to="/">Home</Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Routes />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
