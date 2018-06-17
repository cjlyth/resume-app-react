// @flow
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core/styles';

import type { SymmaryType } from '../../lib/types';
import LinkedInIcon from '../../app/LinkedInIcon';

type SummaryButtonType = {
  fullName: string,
  settingsOpen: boolean,
  toggleSettings: Function,
  linkedInUrl: string,
};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  avatarStyles: {
    height: '80px',
    width: '80px',
  },
  avatarImage: {
    height: '80%',
    width: '80%',
  },
  projectList: {
    width: '100%',
  },
  projectListData: {
    padding: '0',
  },
});

type Props = SymmaryType & SummaryButtonType & { classes: Object };

const SummaryButtons = ({
  fullName, settingsOpen, toggleSettings, linkedInUrl,
}:SummaryButtonType) => (
  <Fragment>
    <IconButton
      title={`Open ${fullName}'s LinkedIn`}
      target="_blank"
      aria-label={`Open ${fullName}'s LinkedIn`}
      href={linkedInUrl}
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      title="Open resume settings"
      target="_blank"
      aria-label="Open resume settings"
      color={settingsOpen ? 'primary' : 'secondary'}
      onClick={() => toggleSettings()}
    >
      <SettingsIcon />
    </IconButton>
  </Fragment>
);


const Summary = ({
  fullName,
  currentTitle,
  classes,
  settingsOpen,
  toggleSettings,
  linkedInUrl,
}:Props) => (
  <Grid
    container
    spacing={16}
    direction="row"
    alignItems="center"
    justify="center"
  >
    <Grid item>
      <Avatar className={classes.avatarStyles}>
        <FaceIcon className={classes.avatarImage} />
      </Avatar>
    </Grid>
    <Grid item>
      <Typography variant="display1" color="primary">
        {fullName}
      </Typography>
      <Typography variant="title" color="textSecondary">
        {currentTitle}
      </Typography>
    </Grid>
    <Grid item>
      <Hidden only="xs">
        <Grid container direction="column">
          <SummaryButtons
            linkedInUrl={linkedInUrl}
            fullName={fullName}
            classes={classes}
            settingsOpen={settingsOpen}
            toggleSettings={toggleSettings}
          />
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container direction="row">
          <SummaryButtons
            linkedInUrl={linkedInUrl}
            fullName={fullName}
            classes={classes}
            settingsOpen={settingsOpen}
            toggleSettings={toggleSettings}
          />
        </Grid>
      </Hidden>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Summary);
