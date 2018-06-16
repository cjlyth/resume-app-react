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
import SharedStyles from '../lib/SharedStyles';


const styles = {
  avatarStyles: {
    height: '80px',
    width: '80px',
  },
  avatarImage: {
    height: '80%',
    width: '80%',
  },
};

type Props = {
  fullName?: string,
  currentTitle?: string,
};

class Mockup extends PureComponent<Props> {
  static defaultProps = {
    fullName: 'Firstname Lastname',
    currentTitle: 'Current Title',
  };

  constructor(props) {
    super(props);
    this.state = {
      settingsOpen: false,
    };
  }

  async toggleSettings() {
    const so = !this.state.settingsOpen;
    this.setState(Object.assign({}, this.state, { settingsOpen: so }));
  }

  render() {
    const { fullName, currentTitle } = this.props;
    const { settingsOpen } = this.state;
    return (
      <Fragment>
        <Head>
          <title>Resume Mockup</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <Grid
          container
          spacing={16}
          direction="column"
          alignItems="center"
          justify="center"
          style={SharedStyles.styleFullWidth}
        >
          <Grid item>
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
                <Typography variant="display1" color="primary">{fullName}</Typography>
                <Typography variant="title" color="textSecondary">{currentTitle}</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <IconButton
                    key={shortid.generate()}
                    title={`Open ${fullName}'s LinkedIn`}
                    target="_blank"
                    aria-label={`Open ${fullName}'s LinkedIn`}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    key={shortid.generate()}
                    title="Open resume settings"
                    target="_blank"
                    aria-label="Open resume settings"
                    color={settingsOpen ? 'primary' : 'secondary'}
                    onClick={() => this.toggleSettings()}
                  >
                    <SettingsIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          settingsOpen: { String(settingsOpen) }
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withLayout(Mockup);
