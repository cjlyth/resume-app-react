/* @flow */

import fp from 'lodash/fp';

import type { Action } from '../../lib/types/index';


type State = {};
const initialState = {
  readyStatus: 'EMPLOYER_INVALID',
  err: null,
  data: [],
};

export default (state:State = {}, action: Action): State => {
  switch (action.type) {
    case 'EMPLOYER_REQUESTING':
      return fp.assign(state, fp.fromPairs([[action.employerWebsite, {
        readyStatus: 'EMPLOYER_REQUESTING',
        err: initialState.err,
      }]]));
    case 'EMPLOYER_FAILURE':
      return fp.assign(state, fp.fromPairs([[action.employerWebsite, {
        readyStatus: 'EMPLOYER_FAILURE',
        err: action.err,
        data: initialState.data,
      }]]));
    case 'EMPLOYER_SUCCESS':
      return fp.assign(state, fp.fromPairs([[action.employerWebsite, {
        readyStatus: 'EMPLOYER_SUCCESS',
        err: initialState.err,
        data: action.data.projects,
      }]]));
    default:
      return state;
  }
};
