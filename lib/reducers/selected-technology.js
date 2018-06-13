/* @flow */

import fp from 'lodash/fp';

type State = {
  list: Array<string>,
};
type ActionType = {
  type: string,
  selectedTechnology: string,
};

export default (state: State = { list: [] }, action: ActionType): State => {
  const selectedTechnologies: Array<string> = state.list;

  return action.type === 'TECHNOLOGY_SELECTION_TOGGLE'
    ? fp.assign(state, {
      list: selectedTechnologies.indexOf(action.selectedTechnology) > -1
        ? selectedTechnologies.filter(e => e !== String(action.selectedTechnology))
        : selectedTechnologies.concat([action.selectedTechnology]),
    })
    : state;
};
