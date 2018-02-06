// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../components/App';
import { tickTimer } from '../actions/timer';
import type { Dispatch } from '../utils/redux-thunk';

type Props = {
  store: { dispatch: Dispatch<void> },
  history: {}
};

export default class Root extends Component<Props> {
  componentDidMount() {
    setInterval(() => {
      this.props.store.dispatch(tickTimer());
    }, 500);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
