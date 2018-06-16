import React, { PureComponent, Fragment } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/Store';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';

import shortid from 'shortid';

import LinkedInIcon from '../app/LinkedInIcon';
import withLayout from '../lib/with-layout';
import SharedStyles from '../lib/SharedStyles';
import { DateRange } from '../app/utils';

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

type ProjectType = {
  projectName?: string,
  dates?: Array<string>,
  objective?: Array<string>,
  roles?: Array<string>,
  responsibilities?: Array<string>,
  achievements?: Array<string>,
};
type Props = {
  fullName?: string,
  currentTitle?: string,
  classes: Object,
  projects: Array<ProjectType>,
};

type SummaryButtonType = {
  fullName: string,
  settingsOpen: boolean,
  toggleSettings: Function,
};

const AchievementList = ({ achievements, classes }:{
  achievements:Array<string>,
  classes: Object,
}) => (
  <Fragment>
    {achievements.length > 0 && (
      <ListSubheader
        className={classes.projectListData}
      >
        Achievements:
      </ListSubheader>
    )}
    {achievements.map(a => (
      <ListItem
        disableGutters
        className={classes.projectListData}
        key={shortid.generate()}
      >
        <ListItemText primary={a} />
      </ListItem>
    ))}
  </Fragment>
);

const ResponsibilityList = ({ responsibilities, classes }:{
  responsibilities:Array<string>,
  classes: Object,
}) => (
  <Fragment>
    {responsibilities.length > 0 && (
      <ListSubheader
        className={classes.projectListData}
      >
        Responsibilities:
      </ListSubheader>
    )}
    {responsibilities.map(r => (
      <ListItem
        disableGutters
        className={classes.projectListData}
        key={shortid.generate()}
      >
        <ListItemText primary={r} />
      </ListItem>
    ))}
  </Fragment>
);

const SummaryButtons = ({ fullName, settingsOpen, toggleSettings }:SummaryButtonType) => (
  <Fragment>
    <IconButton
      title={`Open ${fullName}'s LinkedIn`}
      target="_blank"
      aria-label={`Open ${fullName}'s LinkedIn`}
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

class Mockup extends PureComponent<Props> {
  static defaultProps = {
    fullName: 'Firstname Lastname',
    currentTitle: 'Current Title',
    projects: [
      {
        projectName: 'Project One',
        dates: ['1997-09-01', '2018-05-22'],
        objective: ['to write a react resume application'],
        roles: ['developer', 'product owner'],
        responsibilities: [],
        achievements: [],
      },
      {
        projectName: 'Social Search',
        dates: [
          '2014-01-01',
          '2014-03-01',
        ],
        roles: [
          'Solution Architect',
          'Lead Developer',
        ],
        objective: [
          'Create a tool help targeting analysts quickly find ' +
          'relevant content across a very large number of sites',
        ],
        responsibilities: [
          'Provide architecture advice to project leadership',
          'Design and implement new features as needed',
          'Identify risks and suggest solutions for all development efforts',
        ],
        achievements: [
          'By diligently identifying risks and facilitating mitigation, ' +
          'team success was significantly improved',
          'Modernized and improved search functionality by advocating ' +
          'replacement of a complex Solr configuration with a much more ' +
          'powerful and simple elasticsearch service',
        ],
      },
    ],
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
    const {
      fullName, currentTitle, projects, classes,
    } = this.props;
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
                <Avatar className={classes.avatarStyles}>
                  <FaceIcon className={classes.avatarImage} />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography variant="display1" color="primary">{fullName}</Typography>
                <Typography variant="title" color="textSecondary">{currentTitle}</Typography>
              </Grid>
              <Grid item>
                <Hidden only="xs">
                  <Grid container direction="column">
                    <SummaryButtons
                      {...this.props}
                      settingsOpen={settingsOpen}
                      toggleSettings={() => this.toggleSettings()}
                    />
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid container direction="row">
                    <SummaryButtons
                      {...this.props}
                      settingsOpen={settingsOpen}
                      toggleSettings={() => this.toggleSettings()}
                    />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={10} md={8}>

            {projects.map(({
                  projectName,
                  dates,
                  objective,
                  roles,
                  responsibilities,
                  achievements,
                }) => (
                  <Paper key={shortid.generate()} className={classes.root}>
                    <Grid container spacing={8}>
                      <Grid item xs={5}>
                        <Typography variant="subheading" >{projectName}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subheading" align="right" >
                          <DateRange dates={dates} />
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography align="center" >
                          <StoreIcon />
                        </Typography>
                      </Grid>
                      <List disablePadding className={classes.projectList}>
                        <ListItem
                          divider={responsibilities.length + achievements.length > 0}
                          disableGutters
                        >
                          <Typography variant="caption" align="left" >
                            <div>
                              <b>Objective: </b>
                              {objective.map(o => (<span key={shortid.generate()}>{o}</span>))}
                            </div>
                            <div>
                              <b>Roles: </b>
                              {roles.map((r, i) => (
                                <span key={shortid.generate()}>
                                  {r}{i + 1 < roles.length && ', '}
                                </span>
                              ))}
                            </div>
                          </Typography>
                        </ListItem>
                        <ResponsibilityList
                          classes={classes}
                          responsibilities={responsibilities}
                        />
                        <AchievementList
                          classes={classes}
                          achievements={achievements}
                        />
                      </List>
                    </Grid>
                  </Paper>
              ))}
          </Grid>
          <Grid item>
          settingsOpen: { String(settingsOpen) }
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withLayout(withStyles(styles)(Mockup));
