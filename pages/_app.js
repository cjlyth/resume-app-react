import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import NProgress from 'nprogress';

import withReduxStore from '../lib/with-redux-store';

axios.interceptors.request.use((config) => {
  try {
    NProgress.start();
    return config;
  } catch (_) {
    return config;
  }
}, (error) => {
  try {
    NProgress.done();
    return Promise.reject(error);
  } catch (_) {
    return Promise.reject(error);
  }
});

axios.interceptors.response.use((response) => {
  try {
    NProgress.done();
    return response;
  } catch (_) {
    return response;
  }
}, (error) => {
  // Do something with response error
  try {
    NProgress.done();
    return Promise.reject(error);
  } catch (_) {
    return Promise.reject(error);
  }
});

class ResumeApp extends App {
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

export default withReduxStore(ResumeApp);
