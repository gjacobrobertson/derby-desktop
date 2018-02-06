import { handleActions } from 'redux-actions';
import { mapValues } from 'lodash';

export type TimerType = {
  id: string,
  duration: number,
  current: number,
  running: number
};

export type TimerState = {
  [id: string]: TimerType
};

const create = (state, { payload }) => ({
  ...state,
  [payload.id]: {
    duration: 0,
    current: 0,
    running: 0,
    ...payload
  }
});

const start = (state, { payload: id, timestamp }) => {
  const timer = state[id];
  if (timer.running) {
    return state;
  }
  return {
    ...state,
    [id]: {
      ...timer,
      running: timestamp
    }
  };
};

const stop = (state, { payload: id, timestamp }) => {
  const timer = state[id];
  if (!timer.running) {
    return state;
  }
  const duration = timer.duration + (timestamp - timer.running);
  return {
    ...state,
    [id]: {
      ...timer,
      duration,
      current: duration,
      running: 0,
    }
  };
};

const tick = (state, { timestamp }) => mapValues(state, (timer) => {
  if (!timer.running) {
    return timer;
  }
  return {
    ...timer,
    current: timer.duration + (timestamp - timer.running)
  };
});

export default handleActions({
  TIMER_CREATE: create,
  TIMER_START: start,
  TIMER_STOP: stop,
  TIMER_TICK: tick
}, {});
