// @flow

import type {
  Dispatch,
  GetState,
  ThunkAction,
} from '../../lib/types';

export const toggleSettings = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  const { settings } = getState();
  return dispatch({
    type: 'SETTINGS_TOGGLE',
    settingsOpen: !settings.settingsOpen,
  });
};
