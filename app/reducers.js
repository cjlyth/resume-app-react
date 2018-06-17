/* @flow */

import { combineReducers } from 'redux';


import summary from './summary/summary-reducer';
import settings from './settings/settings-reducer';
import employers from './employers/employers-reducer';

const reducers = {
  summary,
  settings,
  employers,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
