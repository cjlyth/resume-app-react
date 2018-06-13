// @flow
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fp from 'lodash/fp';
import shortid from 'shortid';

import type { Project as ProjectType } from '../../lib/types/index';
import { DateRange } from '../utils';

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
  selectTechnology: Function,
  selectedTechnology: Array<string>,
  registerTechnologies: Function,
}


const arrayKeys = [
  'roles',
  'objective',
  'responsibilities',
  'achievements',
];

const toGridItem = (props, key) => (
  <Grid item key={shortid.generate()}>
    <Typography>{fp.startCase(key)}</Typography>
    <pre>{JSON.stringify(props[key], null, 2)}</pre>
  </Grid>
);

class ProjectComponent extends PureComponent<Props> {
  static defaultProps = {
    technologies: [],
    selectedTechnology: [],
  }
  componentDidMount(){
    this.props.registerTechnologies(this.props.technologies);
  }
  render() {
    const {
      selectedTechnology,
      selectTechnology,
      longName,
      dates,
      classes,
      technologies,
      ...data
    } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{longName} </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <Grid container direction="column">
            <Grid item>
              <Typography><DateRange dates={dates} /></Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                {technologies.map(e => (
                  <Grid key={shortid.generate()} item>
                    <Button
                      onClick={() => selectTechnology(e)}
                      key={shortid.generate()}
                      variant={selectedTechnology.includes(e)?'contained':'outlined'}>
                      {e}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {arrayKeys.map(k => toGridItem(data, k))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ProjectComponent);
