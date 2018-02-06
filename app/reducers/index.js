// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import bout from './bout';
import timer from './timer';

const rootReducer = combineReducers({
  bout,
  router,
  timer,
});

export default rootReducer;
