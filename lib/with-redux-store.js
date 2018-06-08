/* eslint no-underscore-dangle: ["error", { "allow": ["__NEXT_REDUX_STORE__"] }] */
/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["appContext"] }] */


import React from 'react';
import { initializeStore } from './store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}
type Props = {
  +initialReduxState: Object
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
