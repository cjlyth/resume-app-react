// @flow
/* eslint react/prefer-stateless-function: 0 */

import React, { PureComponent } from 'react';
import Head from 'next/head';
import cowsay from 'cowsay-browser';

import withLayout from '../lib/with-layout';

type Props = {}
class Index extends PureComponent<Props> {
  static defaultProps = {
    user: null,
  };

  render() {
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Lyth Resume - Contact</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <pre>
          {cowsay.say({ text: 'Contact!' })}
        </pre>
      </div>
    );
  }
}

export default withLayout(Index);
