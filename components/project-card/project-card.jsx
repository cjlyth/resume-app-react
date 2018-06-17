// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';

import sid from 'shortid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import StoreIcon from '@material-ui/icons/Store';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { DateRange } from '../../app/utils';

import type { ProjectType } from '../../lib/types/index';

const ResponsibilityContent = ({ responsibilities }:{
  responsibilities: Array<string>,
}) => (
  <Fragment>
    {responsibilities.length > 0 && (
      <Typography>Responsibilities:</Typography>
    )}
    {responsibilities.map(r => (
      <Typography key={sid.generate()}> - {r}</Typography>
    ))}
  </Fragment>
);

const AchievementContent = ({ achievements }:{
  achievements: Array<string>,
}) => (
  <Fragment>
    {achievements.length > 0 && (
      <Typography>Achievements:</Typography>
    )}
    {achievements.map(a => (
      <Typography key={sid.generate()}> - {a}</Typography>
    ))}
  </Fragment>
);

const ProjectCard = ({
  projectName = '',
  dates = [],
  objective = [],
  roles = [],
  responsibilities = [],
  achievements = [],
}: ProjectType): Node => (
  <Card>
    <CardHeader
      avatar={
        <Avatar aria-label={projectName} >
          <StoreIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title={projectName}
      subheader={<DateRange dates={dates} />}
    />
    <CardContent>
      <Typography variant="caption" align="left" >
        <div>
          <b>Objective: </b>
          {objective.map(o => (<span key={sid.generate()}>{o}</span>))}
        </div>
        <div>
          <b>Roles: </b>
          {roles.map((r:string, i) => (
            <span key={sid.generate()}>
              {r}{i + 1 < roles.length && ', '}
            </span>
          ))}
        </div>
      </Typography>
    </CardContent>
    <CardContent>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <ResponsibilityContent responsibilities={responsibilities} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AchievementContent achievements={achievements} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ProjectCard;
