import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Summary from '../app/summary';
import Employers from '../app/employers';
import withLayout from '../lib/with-layout';


const Index = () => (
  <Grid container direction="column" alignItems="stretch" justify="center">
    <Grid item><Summary /></Grid>
    <Grid item><Employers /></Grid>
  </Grid>
);

export default connect()(withLayout(Index));
