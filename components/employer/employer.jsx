// @flow
import React from 'react';
import sid from 'shortid';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
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
}:Props) => {
  const employerProjects: Array<ProjectType> = projects
    .filter(project => project.employerWebsite === website);

  return (
    <Hidden xsUp={employerProjects.length < 1}>
      <Grid item key={website} lg={10}>
        <Typography variant="subheading" paragraph>{name}
          <Typography variant="caption" gutterBottom>{website}</Typography>
        </Typography>
        {employerProjects.map(project => (
            <ProjectComponent
              key={sid.generate()}
              {...project}
            />
          ))}
      </Grid>
    </Hidden>
  );
}

export default Employer;
