import { handleActions } from 'redux-actions';

export type BoutType = {
  id: string,
  name: string,
  timer: string
};

export type BoutState = {
  [id: string]: BoutType
};

const createBout = (state, { payload }) => ({
  ...state,
  [payload.id]: payload
});

export default handleActions({
  BOUT_CREATE: createBout
}, {});
