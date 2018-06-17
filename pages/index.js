import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';

import SharedStyles from '../lib/SharedStyles';
import Summary from '../app/summary';
import withLayout from '../lib/with-layout';

type Props = {
  +titleName: string,
  +settingsOpen: boolean,
}

class Index extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.titleName} - Resume</title>
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
            <Summary style={SharedStyles.styleFullWidth} />
          </Grid>
          <Grid item>
            <p>settingsOpen: { String(this.props.settingsOpen) }</p>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { summary, settings } = state;
  return { titleName: summary.data.fullName, settingsOpen: settings.settingsOpen };
}
export default connect(mapStateToProps)(withLayout(Index));
