import React, { PureComponent, Fragment } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import shortid from 'shortid';

import LinkedInIcon from '../app/LinkedInIcon';
import withLayout from '../lib/with-layout';


type Props = {
  fullName?: string,
  currentTitle?: string,
  settingsOpen?: boolean,
};
const styles = {
  avatarStyles: {
    height: '80px',
    width: '80px',
  },
  avatarImage: {
    height: '80%',
    width: '80%',
  },
  currentTitle: {
    // margin: '0 2px',
  },
};

const Mockup = (props:Props) => (
  const toggleSettings = () => {

    // settingsOpen

  }
  <Fragment>
    <Head>
      <title>Resume Mockup</title>
      <meta name="description" content="description for indexing bots" />
    </Head>
    <Grid
      container
      spacing={16}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Avatar style={styles.avatarStyles}>
          <FaceIcon style={styles.avatarImage} />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="display1" color="primary">{props.fullName}</Typography>
        <Typography variant="title" color="textSecondary">{props.currentTitle}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <IconButton
            key={shortid.generate()}
            title={`Open ${props.fullName}'s LinkedIn`}
            target="_blank"
            aria-label={`Open ${props.fullName}'s LinkedIn`}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            key={shortid.generate()}
            title="Open resume settings"
            target="_blank"
            aria-label="Open resume settings"
          >
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  </Fragment>
);

Mockup.defaultProps = {
  fullName: 'Firstname Lastname',
  currentTitle: 'Current Title',
  settingsOpen: false,
};

export default withLayout(Mockup);
