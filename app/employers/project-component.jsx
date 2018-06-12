// @flow
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fp from 'lodash/fp';
import shortid from 'shortid';

import type { Project as ProjectType } from '../../lib/types/index';
import { DateRange } from './utils';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subheading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightLight,
  },
});

type Props = ProjectType & {
  classes: Object,
}


const arrayKeys = [
  'roles',
  'objective',
  'responsibilities',
  'technologies',
  'achievements',
];

const toGridItem = (props, key) => (
  <Grid item key={shortid.generate()}>
    <Typography>{fp.startCase(key)}</Typography>
    <pre>{JSON.stringify(props[key], null, 2)}</pre>
  </Grid>
);

class ProjectComponent extends PureComponent<Props> {
  render() {
    const {
      longName,
      dates,
      classes,
      ...data
    } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{longName} </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid>
            <Grid item>
              <Typography><DateRange dates={dates} /></Typography>
            </Grid>
            {arrayKeys.map(k => toGridItem(data, k))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ProjectComponent);
