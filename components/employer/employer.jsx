// @flow
import React from 'react';
import sid from 'shortid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import type { ComponentType } from 'react';
import type {
  EmployerType,
  ProjectType,
} from '../../lib/types';

type Props = EmployerType & {
  projects: Array<ProjectType>,
  ProjectComponent: ComponentType<ProjectType>,
};

const Employer = ({
  name, website, projects, ProjectComponent,
}:Props) => (
  <Grid item key={website} lg={10}>
    <Typography variant="subheading" paragraph>{name}
      <Typography variant="caption" gutterBottom>{website}</Typography>
    </Typography>
    {projects
      .filter(project => project.employerWebsite === website)
      .map(project => (
        <ProjectComponent
          key={sid.generate()}
          {...project}
        />
      ))
    }
  </Grid>
);
export default Employer;
