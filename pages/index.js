// @flow
/* eslint react/prefer-stateless-function: 0 */

import React, { PureComponent } from 'react';

import Head from 'next/head';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import { User as UserType } from '../lib/types';


type Props = {
  user: UserType
};

class Index extends PureComponent<Props> {
  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Lyth Resume</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <p> Dashboard </p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

export default withAuth(withLayout(Index));
