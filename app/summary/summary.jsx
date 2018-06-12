// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import SummaryAvatar from './summary-avatar';

import type { Summary as SummaryType } from '../../lib/types';

type Props = {
  +summary: SummaryType,
  +style: Object,
}

class Summary extends PureComponent<Props> {
  render() {
    const {
      name, nameSmall, title, titleSmall, links,
    } = this.props.summary.data;
    return (
      <Grid
        container
        spacing={16}
        direction="row"
        alignItems="center"
        justify="center"
        style={this.props.style}
      >
        <Grid item xs={3} sm={2} md={1}>
          <SummaryAvatar links={links} alt={name} />
        </Grid>
        <Grid item>
          <Typography variant="headline" color="primary">
            <Hidden xsDown>{name}</Hidden>
            <Hidden smUp>{nameSmall}</Hidden>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              margin: '0 2px',
            }}
          >
            <Hidden xsDown>{title}</Hidden>
            <Hidden smUp>{titleSmall}</Hidden>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Summary;
