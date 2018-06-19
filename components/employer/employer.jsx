// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import type { EmployerType, ProjectType } from '../../lib/types';

type Props = EmployerType & {
  employerProjects: Array<ProjectType>,
  children: any,
};

const Employer = ({
  name, website, employerProjects, children,
}:Props) => (
  <Hidden xsUp={employerProjects.length < 1}>
    <Grid item key={website} lg={10}>
      <Typography variant="subheading" paragraph>{name}
        <Typography variant="caption" gutterBottom>{website}</Typography>
      </Typography>
      {children}
    </Grid>
  </Hidden>
);

export default Employer;
