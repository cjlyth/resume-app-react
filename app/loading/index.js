import React from 'react';
import Grid from '@material-ui/core/Grid';


export const Loading = (props: {children: any}) => (
  <Grid
    container
    spacing={16}
    direction="row"
    alignItems="center"
    justify="center"
  >
    <Grid item >
      {props.children || 'Loading...'}
    </Grid>
  </Grid>
);

export const Error = (props: {children: any}) => (
  <Grid
    container
    spacing={16}
    direction="row"
    alignItems="center"
    justify="center"
  >
    <Grid item >
      {props.children || 'Error!'}
    </Grid>
  </Grid>
);

