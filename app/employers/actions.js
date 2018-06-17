
import axios from 'axios';
import type { Dispatch, ThunkAction, ReduxState, GetState } from '../../lib/types';
import { app } from '../../lib/config';


const API_URI = '/employers.json';

const shouldFetchEmployers = (s: ReduxState): boolean => (
  s.employers.readyStatus !== 'EMPLOYERS_SUCCESS' &&
  s.employers.readyStatus !== 'EMPLOYERS_REQUESTING'
);

export const fetchEmployerData = (
  employerUri: string,
  URL_BASE: string = app.resumeDataAPIUrl,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'EMPLOYER_REQUESTING', employerUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${employerUri}`);
    dispatch({ type: 'EMPLOYER_SUCCESS', employerUri, data });
  } catch (err) {
    dispatch({ type: 'EMPLOYER_FAILURE', employerUri, err: err.message });
  }
};

export const fetchEmployersData = (
  employersUri: string = API_URI,
  URL_BASE: string = app.resumeDataAPIUrl,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'EMPLOYERS_REQUESTING', employersUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${employersUri}`);
    dispatch({ type: 'EMPLOYERS_SUCCESS', employersUri, data });
  } catch (err) {
    dispatch({ type: 'EMPLOYERS_FAILURE', employersUri, err: err.message });
  }
};

export const fetchEmployersIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  if (shouldFetchEmployers(getState())) {
    return dispatch(fetchEmployersData());
  }
  return null;
};
