// @flow
import React, { PureComponent } from 'react';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { app } from '../../lib/config';
import type { Employers as EmployersType } from '../../lib/types';

type Props = {
  +fetchEmployers: Function,
  +employers: EmployersType
}

class Employers extends PureComponent<Props> {
  componentDidMount() {
    const { fetchEmployers } = this.props;
    fetchEmployers();
  }
  render() {
    const { list } = this.props.employers;
    return (
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid item xs={10}>
          <Typography variant="title">Employers</Typography>
        </Grid>
        <Grid item xs={12}>
          {list.map(({
            name, dates, description, links,
          }) => (
            <Grid key={name} container>
              <Grid item xs={6}>{description}</Grid>
              <Grid item xs={6}>
                <div>
                  {dates.map((d, i) => (
                    <span key={shortid.generate()}>{d} {i === 0 && ' - '}</span>
                ))}
                </div>
              </Grid>
              {links
                .map(({ href, rel }) => (
                  <Grid item xs={3} key={shortid.generate()}>
                    <a href={href.startsWith('http') ? href : app.resumeDataAPIUrl + href} >{
                      rel
                    }
                    </a>
                  </Grid>
                ))}
              <Grid item><Divider /></Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Employers;
