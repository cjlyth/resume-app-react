/* @flow */

import { combineReducers } from 'redux';


import summary from './summary/summary-reducer';
import settings from './settings/settings-reducer';
import employers from './employers/employers-reducer';
import projects from './projects/projects-reducer';

const reducers = {
  summary,
  settings,
  employers,
  projects,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
