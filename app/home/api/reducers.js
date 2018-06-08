import types from './types';

const INITIAL_STATE = {
  count: 0,
  home: '',
  showSpinner: false,
  homeData: [],
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_HOME_JSON: {
      const { home } = action;
      return {
        ...state,
        home,
        homeData: [],
        showSpinner: true,
      };
    }

    case types.RECEIVE_HOME_JSON: {
      const { homeData } = action;
      return {
        ...state,
        homeData,
        showSpinner: false,

      };
    }

    default: return state;
  }
};

export default homeReducer;
