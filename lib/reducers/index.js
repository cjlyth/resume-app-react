/* @flow */

import { combineReducers } from 'redux';


import summary from './summary';
import employers from './employers';
import employer from './employer-data';
import selectedTechnology from './selected-technology';
import technologies from './technologies';

const reducers = {
  selectedTechnology,
  summary,
  employerData: employer,
  employers,
  technologies,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
