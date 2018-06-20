// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';

import sid from 'shortid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DateRange from '../date-range';

import type { ProjectType } from '../../lib/types/index';

const styles = theme => ({
  captionHeader: {
    fontWeight: 'bold',
  },
});

const ResponsibilityContent = ({ responsibilities, classes }:{
  responsibilities: Array<string>,
  classes: Object,
}) => (
  <Fragment>
    {responsibilities.length > 0 && (
      <Typography
        variant="caption"
        className={classes.captionHeader}
      >Responsibilities:
      </Typography>
    )}
    {responsibilities.map(r => (
      <Typography key={sid.generate()} variant="body1" dangerouslySetInnerHTML={{ __html: r }} />
    ))}
  </Fragment>
);

const AchievementContent = ({ achievements, classes }:{
  achievements: Array<string>,
  classes: Object,
}) => (
  <Fragment>
    {achievements.length > 0 && (
      <Typography
        variant="caption"
        className={classes.captionHeader}
      >
        Achievements:
      </Typography>
    )}
    {achievements.map(a => (
      <Typography key={sid.generate()} variant="body1" dangerouslySetInnerHTML={{ __html: a }} />
    ))}
  </Fragment>
);

const ProjectCard = ({
  employerAvatar = '',
  projectName = '',
  dates = [],
  objective = [],
  roles = [],
  responsibilities = [],
  achievements = [],
  classes = Object,
}: ProjectType & {classes: Object}): Node => (
  <Card style={{ width: '100%' }}>
    <CardHeader
      avatar={
        <Avatar aria-label={projectName} src={employerAvatar} />
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
        { responsibilities && responsibilities.length > 0 &&
          <Grid item >
            <ResponsibilityContent responsibilities={responsibilities} classes={classes} />
          </Grid>
        }
        { achievements && achievements.length > 0 &&
          <Grid item >
            <AchievementContent achievements={achievements} classes={classes} />
          </Grid>
        }
      </Grid>
    </CardContent>
  </Card>
);

export default withStyles(styles)(ProjectCard);
