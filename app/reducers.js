/* @flow */

import { combineReducers } from 'redux';


import summary from './summary/summary-reducer';
import settings from './settings/settings-reducer';

const reducers = {
  summary,
  settings,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
