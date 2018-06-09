import axios from 'axios';
import type { Dispatch, ThunkAction } from '../../lib/types';

const API_URI_BASE = 'https://cjlyth.github.io/resume-data/v1';
const API_URI = '/summary.json';

export const fetchSummaryData = (
  summaryUri: string = API_URI,
  URL_BASE: string = API_URI_BASE,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'SUMMARY_REQUESTING', summaryUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${summaryUri}`);
    /* istanbul ignore next */
    dispatch({ type: 'SUMMARY_SUCCESS', summaryUri, data });

  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'SUMMARY_FAILURE', summaryUri, err: err.message });
  }
};
