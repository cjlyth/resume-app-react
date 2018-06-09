/* eslint no-underscore-dangle: ["error", { "allow": ["__NEXT_REDUX_STORE__"] }] */
/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["appContext"] }] */


import React from 'react';
import Store from './store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

type Props = {
  +initialReduxState: Object
}

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
