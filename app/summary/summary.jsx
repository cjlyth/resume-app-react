// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import config from '../../lib/config';

import type { Summary as SummaryType } from '../../lib/types';

type Props = {
  +fetchSummary: Function,
  +summary: SummaryType
}

class Summary extends PureComponent<Props> {
  componentDidMount() {
    const { fetchSummary } = this.props;
    fetchSummary();
  }
  render() {
    const {
      fetchSummary,
      summary,
    } = this.props;
    const { name, title } = summary.data;
    return (
      <div>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item xs={12}>
            {summary.data.links
            .filter(link => link.rel === 'avatar')
            .map(({ href }) => (
              <Avatar
                key={`${name}-logo`}
                src={`${config.app.resumeDataAPIUrl}/${href}`}
                alt={name}
              />
            ))}
          </Grid>
          <Grid item xs={12}>{name}</Grid>
          <Grid item xs={12}>{title}</Grid>
        </Grid>
        <pre>{JSON.stringify(summary, undefined, 2)}</pre>
        <button onClick={fetchSummary}>Load</button>
      </div>
    );
  }
}

export default Summary;
