// @flow
import React, { PureComponent } from 'react';
import shortid from 'shortid';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

import type { LinkRelation, Project as ProjectType } from '../../lib/types';
import Project from '../project';

/* eslint-disable react/no-unused-prop-types */
type Props = {
  readyStatus?: string,
  err?: Object,
  link: LinkRelation,
  fetchEmployer: Function,
  projects: Array<ProjectType>,
  classes: Object,
}
/* eslint-enable react/no-unused-prop-types */

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const toProjectComponent = e => (<Project key={shortid.generate()} {...e} />);

const NoDataComponent = (classes: Object) => (
  <ExpansionPanel>
    <ExpansionPanelSummary>
      <Typography className={classes.heading}>No relevant experience found</Typography>
    </ExpansionPanelSummary>
  </ExpansionPanel>
)

class EmployerContent extends PureComponent<Props> {
  static defaultProps = {
    readyStatus: '',
    err: null,
    projects: [],
  }

  componentDidMount() {
    const { link, fetchEmployer } = this.props;
    fetchEmployer(link.href);
  }

  render() {
    const { projects, classes } = this.props;
    return (
      <List>
        {projects && projects.length > 0
          ? projects.map(toProjectComponent)
          : (<NoDataComponent classes={classes} />)
        }
      </List>
    );
  }
}

export default withStyles(styles)(EmployerContent);
