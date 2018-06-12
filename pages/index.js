import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import SharedStyles from '../lib/SharedStyles';
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
        <Summary style={SharedStyles.styleFullWidth} />
        <Employers style={SharedStyles.styleFullWidth} />
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
