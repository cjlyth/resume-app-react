/* @flow */

import fp from 'lodash/fp';

import type { Action } from '../../lib/types/index';

type State = {
  settingsOpen: boolean
};

const initialState = {
  settingsOpen: false,
};

export default (state: State = initialState, action: Action): State => (
  action.type === 'SETTINGS_TOGGLE'
    ? fp.assign(state, { settingsOpen: action.settingsOpen })
    : state);
