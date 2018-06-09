import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../lib/reducers';
import type { Store } from '../lib/types';

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = [
    thunkMiddleware,
  ];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancers);
  return store;
};
