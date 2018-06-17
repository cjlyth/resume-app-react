/* @flow */

import fp from 'lodash/fp';

import type { SummaryType, FetchType, Action } from '../../lib/types/index';

type State = FetchType & {
  data: SummaryType
};

const initialState = {
  readyStatus: 'SUMMARY_INVALID',
  err: null,
  data: {
    fullName: '',
    currentTitle: '',
    linkedInUrl: '',
    avatarUrl: '',
  },
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'SUMMARY_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'SUMMARY_REQUESTING',
      });
    case 'SUMMARY_FAILURE':
      return fp.assign(state, {
        readyStatus: 'SUMMARY_FAILURE',
        err: action.err,
        data: initialState.data,
      });
    case 'SUMMARY_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'SUMMARY_SUCCESS',
        err: initialState.err,
        data: action.data,
      });
    default:
      return state;
  }
};
