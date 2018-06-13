// @flow
import type { Dispatch, ThunkAction } from '../../lib/types';

export const selectTechnology = (selectedTechnology: string = 'React'):
  ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'TECHNOLOGY_SELECTION_TOGGLE', selectedTechnology });
};

export const registerTechnologies = (technologies: Array<string> = []):
  ThunkAction => async (dispatch: Dispatch) => {
  if (technologies && technologies.length > 0) {
    dispatch({ type: 'TECHNOLOGY_SELECTION_REGISTER', list: technologies });
  }
};
