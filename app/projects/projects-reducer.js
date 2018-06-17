/* @flow */

import fp from 'lodash/fp';

import type { ProjectType, FetchType, Action } from '../../lib/types/index';


type State = FetchType & {
  data: Array<ProjectType>
};

const initialState = {
  readyStatus: 'EMPLOYER_INVALID',
  err: null,
  data: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'EMPLOYER_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'EMPLOYER_REQUESTING',
      });
    case 'EMPLOYER_FAILURE':
      return fp.assign(state, {
        readyStatus: 'EMPLOYER_FAILURE',
        err: action.err,
        data: initialState.data,
      });
    case 'EMPLOYER_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'EMPLOYER_SUCCESS',
        err: initialState.err,
        data: action.data,
      });
    default:
      return state;
  }
};
