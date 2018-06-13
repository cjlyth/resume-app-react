/* @flow */

import _ from 'lodash';

import type { Action } from '../types';

type State = {
  list: Array<string>,
};
const initialState = {
  list: [],
};
export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'TECHNOLOGY_SELECTION_REGISTER':
      return _.assign(state, {
        list:
          _(state.list)
            .concat(action.list)
            .sort()
            .sortedUniq()
            .value(),
      });
    default:
      return state || initialState;
  }
};
