// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import config from '../../lib/config';
import { styleSummaryAvatar } from '../../lib/SharedStyles';
import type { Summary as SummaryType } from '../../lib/types';

type Props = {
  +fetchSummary: Function,
  +summary: SummaryType
}

const styles = {
  center: {
    textAlign: 'center',
  },
};

class Summary extends PureComponent<Props> {
  componentDidMount() {
    const { fetchSummary } = this.props;
    fetchSummary();
  }
  render() {
    const {
      name, nameSmall, title, titleSmall, links,
    } = this.props.summary.data;
    return (
      <Grid container direction="column" justify="space-around" alignItems="center">
        <Grid item xs={4} sm={3} md={2} >
          {links
            .filter(link => link.rel === 'avatar')
            .map(({ href }) => (
              <Avatar
                style={styleSummaryAvatar}
                key={`${name}-logo`}
                src={`${config.app.resumeDataAPIUrl}/${href}`}
                alt={name}
              />
            ))}
        </Grid>
        <Grid item xs={12}>
          <Hidden xsDown>
            <Typography variant="title" style={styles.center}>
              {name}
            </Typography>
            <Typography variant="subheading" style={styles.center}>
              {title}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="title" style={styles.center}>
              {nameSmall}
            </Typography>
            <Typography variant="subheading" style={styles.center}>
              {titleSmall}
            </Typography>
          </Hidden>
        </Grid>
      </Grid>
    );
  }
}

export default Summary;
