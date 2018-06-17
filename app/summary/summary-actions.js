// @flow
import axios from 'axios/index';
import type {
  Dispatch,
  GetState,
  ReduxState,
  ThunkAction,
  SummaryType, LinkRelation,
} from '../../lib/types';

import { app } from '../../lib/config';

const SUMMARY_API_URI = '/summary.json';

const shouldFetchSummary = (s: ReduxState): boolean => (
  s.summary.readyStatus !== 'SUMMARY_SUCCESS' &&
  s.summary.readyStatus !== 'SUMMARY_REQUESTING'
);

const getLink = (links: Array<LinkRelation> = [], linkRel:string) => {
  const link = links.find(l => l.rel === linkRel);
  return link ? link.href : '';
};

export const fetchSummaryData = (
  summaryUri: string = SUMMARY_API_URI,
  URL_BASE: string = app.resumeDataAPIUrl,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'SUMMARY_REQUESTING', summaryUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${summaryUri}`);
    const link = (rel: string) => getLink(data.links, rel);
    const avatarUri = link('avatar');
    const summary: SummaryType = {
      fullName: data.name,
      currentTitle: data.title,
      avatarUrl: avatarUri.startsWith('http') ? avatarUri : `${URL_BASE}/${avatarUri}`,
      linkedInUrl: link('linkedin'),
    };
    dispatch({ type: 'SUMMARY_SUCCESS', summaryUri, data: summary });
  } catch (err) {
    dispatch({ type: 'SUMMARY_FAILURE', summaryUri, err: err.message });
  }
};

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
export const fetchSummaryIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  if (shouldFetchSummary(getState())) {
    return dispatch(fetchSummaryData());
  }
  return null;
};
