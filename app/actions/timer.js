// @flow
import { createAction } from 'redux-actions';
import uuid from 'uuid/v4';
import stamp from '../utils/stamp';
import type { Dispatch } from '../utils/redux-thunk';

const create = createAction('TIMER_CREATE');
const start = createAction('TIMER_START');
const stop = createAction('TIMER_STOP');
const tick = createAction('TIMER_TICK');

export const createTimer = () => (dispatch: Dispatch<void>) => {
  const id = uuid();
  return dispatch(create({ id }));
};
export const startTimer = (id: string) => stamp(start(id));
export const stopTimer = (id: string) => stamp(stop(id));
export const tickTimer = () => stamp(tick());
