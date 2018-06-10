/* eslint no-underscore-dangle: ["error", { "allow": ["__NEXT_REDUX_STORE__"] }] */
/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["appContext"] }] */


import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from '../lib/reducers';
import type { StoreType } from '../lib/types';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

type Props = {
  +initialReduxState: Object
}

const Store = (history: Object, initialState: Object = {}): StoreType => {
  const middlewares = [
    thunkMiddleware,
  ];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancers);
  return store;
};


function getOrCreateStore(initialState) {
  if (isServer) {
    return Store({ initialState });
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Store({ initialState });
  }
  return window[__NEXT_REDUX_STORE__];
}

export default App => class Redux extends React.Component<Props> {
  static async getInitialProps(appContext) {
    const reduxStore = getOrCreateStore();
    appContext.ctx.reduxStore = reduxStore;

    let appProps = {};
    if (App.getInitialProps) {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  render() {
    return <App {...this.props} reduxStore={this.reduxStore} />;
  }
};
