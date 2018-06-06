// @flow
/* eslint react/prefer-stateless-function: 0 */

import React, { PureComponent } from 'react';

import Head from 'next/head';

import withLayout from '../lib/withLayout';


class Index extends PureComponent {
  static defaultProps = {
    user: null,
  };

  render() {
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Lyth Resume</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <p> Dashboard </p>
      </div>
    );
  }
}

export default withLayout(Index);
