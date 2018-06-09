/* @flow */

import fp from 'lodash/fp';

import type { Employers, Action } from '../types';

type State = Employers;

const initialState = {
  readyStatus: 'EMPLOYERS_INVALID',
  err: null,
  list: [],
  links: [],
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
        list: initialState.list,
        links: initialState.links,
      });
    case 'EMPLOYERS_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'EMPLOYERS_SUCCESS',
        err: initialState.err,
        list: action.data.employers,
        links: action.data.links,
      });
    default:
      return state;
  }
};
