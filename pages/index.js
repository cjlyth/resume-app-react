import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';

import SharedStyles from '../lib/SharedStyles';
import Summary from '../app/summary';
import Employers from '../app/employers';
import withLayout from '../lib/with-layout';

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
          <title>{titleName} - Resume</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <Grid
          container
          spacing={16}
          direction="column"
          alignItems="center"
          justify="center"
          style={SharedStyles.styleFullWidth}
        >
          <Grid item>
            <Summary />
          </Grid>
          <Employers />
        </Grid>
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
export default connect(mapStateToProps)(withLayout(Index));
