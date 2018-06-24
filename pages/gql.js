import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import withLayout from '../lib/with-layout';
import withApollo from '../lib/with-apollo';

import SummaryData from '../app/summary/summary-gql-container';


type Props = {
  +titleName: string,
}


class Index extends PureComponent<Props> {
  render() {
    const {
      titleName,
    } = this.props;
    return (
      <Fragment>
        <Head>
          <title>{titleName} - Apollo</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <SummaryData />
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  const { summary } = state;
  return {
    titleName: summary.data.fullName,
  };
}
export default connect(mapStateToProps)(withApollo(withLayout(Index)));
