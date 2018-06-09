/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';

import type { Reducers } from '../reducers';

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

export type EmployerInfo = {
  +[employerUri: string]: {
    +readyStatus: string,
    +err: any,
    +info: Object
  }
};

// State
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

// Action
export type Action =
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
