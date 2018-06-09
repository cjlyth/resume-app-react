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
      <Grid container justify="space-around" alignItems="center" spacing={24}>
        <Grid xs={12}>&nbsp;</Grid>
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
          <Typography variant="headline" style={styles.center}>
            <Hidden xsDown>{name}</Hidden>
            <Hidden smUp>{nameSmall}</Hidden>
          </Typography>
          <Typography variant="subheading" style={styles.center}>
            <Hidden xsDown>{title}</Hidden>
            <Hidden smUp>{titleSmall}</Hidden>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Summary;
