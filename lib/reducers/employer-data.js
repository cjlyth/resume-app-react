/* @flow */

import fp from 'lodash/fp';

import type { EmployerData, Action } from '../types';

type State = EmployerData;

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    case 'EMPLOYER_REQUESTING':
      return fp.assign(state, fp.fromPairs([[action.employerUri, {
        readyStatus: 'EMPLOYER_REQUESTING',
      }]]));
    case 'EMPLOYER_FAILURE':
      return fp.assign(state, fp.fromPairs([[action.employerUri, {
        readyStatus: 'EMPLOYER_FAILURE',
        err: action.err,
        projects: [],
      }]]));
    case 'EMPLOYER_SUCCESS':
      return fp.assign(state, fp.fromPairs([[action.employerUri, {
        readyStatus: 'EMPLOYER_SUCCESS',
        err: null,
        projects: action.data.projects,
      }]]));
    default:
      return state;
  }
};
