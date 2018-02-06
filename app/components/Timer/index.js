// @flow
import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import type { TimerType } from '../../reducers/timer';

type Props = {
  timer: TimerType,
  start: () => void,
  stop: () => void
};

export default class Timer extends Component<Props> {
  render() {
    const { start, stop, timer } = this.props;
    return (
      <Segment.Group>
        <Segment textAlign="center">{timer.current}</Segment>
        <Segment>
          <Button.Group fluid>
            <Button onClick={start}>Start</Button>
            <Button onClick={stop}>Stop</Button>
          </Button.Group>
        </Segment>
      </Segment.Group>
    );
  }
}
