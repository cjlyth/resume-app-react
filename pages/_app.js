import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import NProgress from 'nprogress';

import withReduxStore from '../lib/with-redux-store';

axios.interceptors.request.use((config) => {
  NProgress.start()
  return config;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
}, (error) => {
  // Do something with response error
  NProgress.done();
  return Promise.reject(error);
});

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
