// @flow
import { createAction } from 'redux-actions';
import { routerActions } from 'react-router-redux';
import uuid from 'uuid/v4';
import { createTimer } from './timer';
import type { Dispatch } from '../utils/redux-thunk';

const foo = 'barsf';
const create = createAction('BOUT_CREATE');
export const joinBout = createAction('BOUT_JOIN');
export const createBout = (name: string) => (dispatch: Dispatch) => {
  if (!name) {
    return;
  }
  const id = uuid();
  const timer = dispatch(createTimer());
  dispatch(create({ id, name, timer: timer.payload.id }));
  dispatch(routerActions.push(`/bout/${id}`));
};

