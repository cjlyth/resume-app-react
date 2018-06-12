// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Employer from './employer';
import type { Employers as EmployersType } from '../../lib/types';

type Props = {
  +fetchEmployers: Function,
  +employers: EmployersType,
  +style: Object,
}


class Employers extends PureComponent<Props> {
  componentDidMount() {
    const { fetchEmployers } = this.props;
    fetchEmployers();
  }
  render() {
    const { list } = this.props.employers;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        style={this.props.style}
        spacing={8}
      >
        <Grid item><Typography variant="body2">Work History</Typography></Grid>
        {list.map(e => (
          <Grid item><Employer {...e} /></Grid>
        ))}
      </Grid>
    );
  }
}

export default Employers;
