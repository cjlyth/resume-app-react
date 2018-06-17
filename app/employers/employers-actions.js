
import axios from 'axios';
import type { Dispatch, ThunkAction, ReduxState, GetState } from '../../lib/types';
import { app } from '../../lib/config';
import utils from '../utils';
import type { EmployerInfo } from '../../lib/types/types';

const API_URI = '/employers.json';

const shouldFetchEmployers = (s: ReduxState): boolean => (
  s.employers.readyStatus !== 'EMPLOYERS_SUCCESS' &&
  s.employers.readyStatus !== 'EMPLOYERS_REQUESTING'
);

export const fetchEmployerData = (
  employer: EmployerInfo,
  URL_BASE: string = app.resumeDataAPIUrl,
): ThunkAction => async (dispatch: Dispatch) => {
  const link = (rel: string) => utils.getLinkRelation(employer.links, rel);
  const employerUri = link('self');
  const employerWebsite = link('website');
  dispatch({
    type: 'EMPLOYER_REQUESTING',
    employerWebsite,
    employerUri,
  });
  try {
    const { data } = await axios.get(`${URL_BASE}/${employerUri}`);
    dispatch({
      type: 'EMPLOYER_SUCCESS',
      employerWebsite,
      employerUri,
      data,
    });
  } catch (err) {
    dispatch({
      type: 'EMPLOYER_FAILURE',
      employerWebsite,
      employerUri,
      err: err.message,
    });
  }
};

export const fetchEmployersData = (
  employersUri: string = API_URI,
  URL_BASE: string = app.resumeDataAPIUrl,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'EMPLOYERS_REQUESTING', employersUri });
  try {
    const { data } = await axios.get(`${URL_BASE}/${employersUri}`);
    dispatch({ type: 'EMPLOYERS_SUCCESS', employersUri, data: data.employers });
    data.employers.forEach((employer: EmployerInfo) => dispatch(fetchEmployerData(employer)));
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
