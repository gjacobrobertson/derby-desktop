import type { Dispatch as ReduxDispatch, } from 'redux';

export type PayloadAction<T> = {
  type: string,
  payload: T
};
export type GetState<S> = () => S;
export type Thunk<A, S> = (Dispatch<A>, GetState<S>) => Promise<A> | A;
export type Dispatch<A> = ReduxDispatch<A> | Thunk<A>;
