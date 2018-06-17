// @flow
import React, { PureComponent, Fragment } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import shortid from 'shortid';

import withLayout from '../lib/with-layout';
import SharedStyles from '../lib/SharedStyles';
import ProjectCard from '../components/project-card';
import Summary from '../components/summary';
import type {
  ProjectType,
  SymmaryType,
} from '../lib/types';

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


type Props = {
  summary: SymmaryType,
  employers: Array<EmployerType>,
  classes: Object,
  projects: Array<ProjectType>,
  toggleCompanyMenu: Function,
};


class Mockup extends PureComponent<Props, {
  settingsOpen: boolean,
}> {
  static defaultProps = {
    summary: {
      fullName: 'Firstname Lastname',
      currentTitle: 'Current Title',
      linkedInUrl: 'http://www.linkedin.com/me',
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
            <Summary
              settingsOpen={settingsOpen}
              {...summary}
              toggleSettings={this.toggleSettings}
            />
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
