/* @flow */

import fp from 'lodash/fp';

import type { EmployerType, FetchType, Action } from '../../lib/types/index';


type State = FetchType & {
  data: Array<EmployerType>
};

const initialState = {
  readyStatus: 'EMPLOYERS_INVALID',
  err: null,
  data: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'EMPLOYERS_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'EMPLOYERS_REQUESTING',
      });
    case 'EMPLOYERS_FAILURE':
      return fp.assign(state, {
        readyStatus: 'EMPLOYERS_FAILURE',
        err: action.err,
        data: initialState.data,
      });
    case 'EMPLOYERS_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'EMPLOYERS_SUCCESS',
        err: initialState.err,
        data: action.data,
      });
    default:
      return state;
  }
};
