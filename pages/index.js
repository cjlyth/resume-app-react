import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

import Summary from '../app/summary';
import Employers from '../app/employers';
import withLayout from '../lib/with-layout';
import { fetchSummaryIfNeeded } from '../app/summary/actions';


type Props = {
  +fetchSummary: Function,
  +nameSmall: string
}

class Index extends PureComponent<Props> {
  componentDidMount() {
    const { fetchSummary } = this.props;
    fetchSummary();
  }
  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.nameSmall} - Resume</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <Summary style={{
          margin: 0,
          width: '100%',
        }}
        />
        <Employers style={{
          margin: 0,
          width: '100%',
        }}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSummary: () => {
    dispatch(fetchSummaryIfNeeded());
  },
});
function mapStateToProps(state) {
  const {
    nameSmall,
  } = state.summary.data;
  return { nameSmall };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLayout(Index));
