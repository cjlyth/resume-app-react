// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import sharedStyle from '../../lib/SharedStyles';
import config from '../../lib/config';
import type { Summary as SummaryType } from '../../lib/types';

type Props = {
  +summary: SummaryType
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
        style={{
          margin: 0,
          width: '100%',
        }}
      >
        <Grid item xs={3} sm={2} md={1}>
          {links
            .filter(link => link.rel === 'avatar')
            .map(({ href }) => (
              <Avatar
                style={sharedStyle.styleBigAvatar}
                key={`${name}-logo`}
                src={`${config.app.resumeDataAPIUrl}/${href}`}
                alt={name}
              />
            ))}
        </Grid>
        <Grid item>
          <Typography variant="headline" color="primary">
            <Hidden xsDown>{name}</Hidden>
            <Hidden smUp>{nameSmall}</Hidden>
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <Hidden xsDown>{title}</Hidden>
            <Hidden smUp>{titleSmall}</Hidden>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Summary;
