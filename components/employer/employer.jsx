// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import type { EmployerType, ProjectType } from '../../lib/types';

type Props = EmployerType & {
  employerProjects: Array<ProjectType>,
  children: any,
};

const Employer = ({
  name, website, children,
}:Props) => (
  <Grid item key={website} lg={10}>
    <Typography variant="subheading" paragraph>{name}
      <Typography variant="caption" gutterBottom>{website}</Typography>
    </Typography>
    {children}
  </Grid>
);

export default Employer;
