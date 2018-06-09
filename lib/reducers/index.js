/* @flow */

import { combineReducers } from 'redux';


import summary from './summary';
import employers from './employers';

const reducers = {
  summary,
  employers,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
