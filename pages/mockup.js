// @flow
import React, { PureComponent, Fragment } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import StoreIcon from '@material-ui/icons/Store';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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

type EmployerType = {
  name?: string,
  website?: string,
};

type ProjectType = {
  projectName: string,
  dates: Array<string>,
  objective: Array<string>,
  roles: Array<string>,
  responsibilities: Array<string>,
  achievements: Array<string>,
  employerWebsite: string, // eslint-disable-line react/no-unused-prop-types
};
type SymmaryType = {
  fullName?: string,
  currentTitle?: string,
};
type Props = {
  summary: SymmaryType,
  employers: Array<EmployerType>,
  classes: Object,
  projects: Array<ProjectType>,
  toggleCompanyMenu: Function,
};

type SummaryButtonType = {
  fullName: string,
  settingsOpen: boolean,
  toggleSettings: Function,
};


const SummaryButtons = ({
  fullName, settingsOpen, toggleSettings,
}:SummaryButtonType) => (
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
const ResponsibilityContent = ({ responsibilities }:{
  responsibilities: Array<string>,
}) => (
  <Fragment>
    {responsibilities.length > 0 && (
      <Typography>Responsibilities:</Typography>
    )}
    {responsibilities.map(r => (
      <Typography key={shortid.generate()}> - {r}</Typography>
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
      <Typography key={shortid.generate()}> - {a}</Typography>
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
}: ProjectType) => (
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
          {objective.map(o => (<span key={shortid.generate()}>{o}</span>))}
        </div>
        <div>
          <b>Roles: </b>
          {roles.map((r:string, i) => (
            <span key={shortid.generate()}>
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

class Mockup extends PureComponent<Props, {
  settingsOpen: boolean,
}> {
  static defaultProps = {
    summary: {
      fullName: 'Firstname Lastname',
      currentTitle: 'Current Title',
    },
    employers: [
      {
        name: 'Company 1',
        website: 'https://www.company-1.com',
      },
      {
        name: 'Company 2',
        website: 'https://www.company-2.com',
      },
    ],
    projects: [
      {
        employerWebsite: 'https://www.company-2.com',
        projectName: 'Ut enim',
        dates: [
          '2000-01-01',
          '2012-12-21',
        ],
        roles: [
          'Lorem ipsum',
          'Duis aute',
        ],
        objective: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        responsibilities: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
          'nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
          'dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
          'officia deserunt mollit anim id est laborum.',
        ],
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
          'nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
          'dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
          'officia deserunt mollit anim id est laborum.',
        ],
      },
      {
        employerWebsite: 'https://www.company-1.com',
        projectName: 'Lorem ipsum',
        dates: [
          '2000-01-01',
          '2012-12-21',
        ],
        roles: [
          'Lorem ipsum',
          'Duis aute',
        ],
        objective: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        responsibilities: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
          'nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
          'dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
          'officia deserunt mollit anim id est laborum.',
        ],
        achievements: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
          'nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
          'dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
          'officia deserunt mollit anim id est laborum.',
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

  toggleSettings = () => {
    this.setState(Object.assign({}, this.state, {
      settingsOpen: !this.state.settingsOpen,
    }));
  };


  render() {
    const {
      summary, projects, classes, employers,
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
                <Typography variant="display1" color="primary">
                  {summary.fullName}
                </Typography>
                <Typography variant="title" color="textSecondary">
                  {summary.currentTitle}
                </Typography>
              </Grid>
              <Grid item>
                <Hidden only="xs">
                  <Grid container direction="column">
                    <SummaryButtons
                      {...summary}
                      settingsOpen={settingsOpen}
                      toggleSettings={() => this.toggleSettings()}
                    />
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid container direction="row">
                    <SummaryButtons
                      {...summary}
                      settingsOpen={settingsOpen}
                      toggleSettings={this.toggleSettings}
                    />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          {employers.map((employer: EmployerType) => (
            <Grid item key={employer.website} lg={10}>
              <Typography variant="subheading" paragraph>{employer.name}</Typography>
              {projects
                .filter(project => project.employerWebsite === employer.website)
                .map(project => (
                  <ProjectCard
                    key={shortid.generate()}
                    {...project}
                    employer={employer}
                    classes={classes}
                  />
                ))
              }
            </Grid>
          ))}
          <Grid item>
            <p>settingsOpen: { String(settingsOpen) }</p>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withLayout(withStyles(styles)(Mockup));
