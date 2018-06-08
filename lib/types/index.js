/* @flow */
/* eslint-disable no-use-before-define */

import type { Store as ReduxStore } from 'redux';

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


// State
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V; // eslint-disable-line no-undef
export type ReduxState = $ObjMap<Reducers, $ExtractFunctionReturn>; // eslint-disable-line no-undef

// Action
export type Action =
  | { type: 'SUMMARY_REQUESTING' }
  | { type: 'SUMMARY_SUCCESS', data: Object }
  | { type: 'SUMMARY_FAILURE', err: any };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => ReduxState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

// Store
export type Store = ReduxStore<ReduxState, Action>;

