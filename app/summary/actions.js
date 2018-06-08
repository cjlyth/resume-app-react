import { actionTypes } from '../../lib/store';

export const incrementCount = () => dispatch => dispatch({ type: actionTypes.INCREMENT });

export const decrementCount = () => dispatch => dispatch({ type: actionTypes.DECREMENT });

export const resetCount = () => dispatch => dispatch({ type: actionTypes.RESET });
