import axios from 'axios';
import type { Dispatch, ThunkAction, ReduxState, GetState } from '../../lib/types';


const API_URI_BASE = 'https://cjlyth.github.io/resume-data/v1';
const API_URI = '/summary.json';

const shouldFetchSummary = (s: ReduxState): boolean => (
  s.summary.readyStatus !== 'SUMMARY_SUCCESS' &&
  s.summary.readyStatus !== 'SUMMARY_REQUESTING'
);

export const fetchSummaryData = (
  summaryUri: string = API_URI,
  URL_BASE: string = API_URI_BASE,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'SUMMARY_REQUESTING', summaryUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${summaryUri}`);
    dispatch({ type: 'SUMMARY_SUCCESS', summaryUri, data });
  } catch (err) {
    dispatch({ type: 'SUMMARY_FAILURE', summaryUri, err: err.message });
  }
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
