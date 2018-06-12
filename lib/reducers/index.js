/* @flow */

import { combineReducers } from 'redux';


import summary from './summary';
import employers from './employers';
import employer from './employer-data';

const reducers = {
  summary,
  employerData: employer,
  employers,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
