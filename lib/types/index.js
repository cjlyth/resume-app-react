/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';

import type { Reducers } from '../reducers';

export type ProjectType = {
  projectName: string,
  dates: Array<string>,
  objective: Array<string>,
  roles: Array<string>,
  responsibilities: Array<string>,
  achievements: Array<string>,
  employerWebsite: string, // eslint-disable-line react/no-unused-prop-types
};

export type SymmaryType = {
  fullName: string,
  currentTitle: string,
  linkedInUrl: string,
};

export type EmployerType = {
  name?: string,
  website?: string,
};

// Reducers

export type LinkRelation = {
  +rel: string,
  +href: string
};

export type SummaryData = {
  +name: string,
  +nameSmall: string,
  +title: string,
  +titleSmall: string,
  +links: Array<LinkRelation>
};

export type Summary = {
  +readyStatus: string,
  +err: any,
  +data: SummaryData
};

export type Employers = {
  +readyStatus: string,
  +err: any,
  +list: Array<EmployerInfo>,
  +links: Array<LinkRelation>,
};

export type EmployerInfo = {
  +description: string,
  +name: any,
  +dates: Array<string>,
  +links: Array<LinkRelation>,
};

export type Project = {
  longName: string,
  shortName: string,
  dates: Array<string>,
  roles: Array<string>,
  objective: Array<string>,
  responsibilities: Array<string>,
  technologies: Array<string>,
  achievements: Array<string>,
}


// this is an object mapping of employerUri:
export type EmployerData = {
};

// State
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

// Action
export type Action =
  | { type: 'TECHNOLOGY_SELECTION_TOGGLE', selectedTechnology: string}
  | { type: 'TECHNOLOGY_SELECTION_REGISTER', list: Array<string>}
  | { type: 'SUMMARY_REQUESTING' }
  | { type: 'SUMMARY_SUCCESS', data: Object }
  | { type: 'SUMMARY_FAILURE', err: any }
  | { type: 'EMPLOYERS_REQUESTING' }
  | { type: 'EMPLOYERS_SUCCESS', data: Object }
  | { type: 'EMPLOYERS_FAILURE', err: any }
  | { type: 'EMPLOYER_REQUESTING', employerUri: string }
  | { type: 'EMPLOYER_SUCCESS', employerUri: string, data: Object }
  | { type: 'EMPLOYER_FAILURE', employerUri: string, err: any };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => ReduxState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

// Store
export type Store = ReduxStore<ReduxState, Action>;
