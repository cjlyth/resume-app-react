// @flow
import React, { Fragment, PureComponent } from 'react';
import sid from 'shortid';
import Employer from '../employer';

import type { EmployerType } from '../../lib/types';
import ProjectCard from '../project-card';

type Props = {
  +employers: Array<EmployerType>,
  +fetchEmployers: Function,
};

class Employers extends PureComponent<Props> {
  static defaultProps = {
    employers: [],
    fetchEmployers: () => { },
  };

  componentDidMount() {
    const { fetchEmployers } = this.props;
    fetchEmployers();
  }

  render() {
    const {
      employers,
    } = this.props;
    return (
      <Fragment>
        {employers.map((employer: EmployerType) => (
          <Employer
            key={sid.generate()}
            {...employer}
            projects={[]}
            ProjectComponent={ProjectCard}
          />
        ))}
      </Fragment>
    );
  }
}

export default Employers;
