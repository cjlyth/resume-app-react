// @flow
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


import { styleToolbar } from '../../lib/SharedStyles';

export default () => (
  <Toolbar style={styleToolbar}>
    <Grid container direction="row" justify="space-around" alignItems="center">
        Lyth
    </Grid>
  </Toolbar>
);
