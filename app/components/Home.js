// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () => (
  <div data-tid="container">
    <Button as={Link} to="/bout/new">Host Bout</Button>
    <Button as={Link} to="/bout">Join Bout</Button>
  </div>
);

export default Home;
