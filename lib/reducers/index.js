/* @flow */

import { combineReducers } from 'redux';


import summary from './summary';

const reducers = {
  summary,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
