// @flow
import React, { Fragment, PureComponent } from 'react';
import shortid from 'shortid';
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
      <Fragment>
        <Typography variant="title">Employers</Typography>
        {list.map(({
          name, dates, description, links,
        }) => (
          <div key={name}>
            <div>{description}</div>
            {dates.map(d => (
              <div key={shortid.generate()}>{d}</div>
            ))}
            {links
              .filter(link => link.rel === 'self')
              .map(({ href }) => (
                <a key={shortid.generate()} href={app.resumeDataAPIUrl + href} >{href}</a>
              ))}
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Employers;
