// @flow
import React, { Fragment, PureComponent } from 'react';
import sid from 'shortid';

import Employer from '../employer';
import ProjectCard from '../project-card';

import type { EmployerType, ProjectType } from '../../lib/types';

type Props = {
  +employers: Array<EmployerType>,
  +projects: Array<ProjectType>,
  +fetchEmployers: Function,
};

class Employers extends PureComponent<Props> {
  static defaultProps = {
    employers: [],
    projects: [],
    fetchEmployers: () => { },
  };

  componentDidMount() {
    const { fetchEmployers } = this.props;
    fetchEmployers();
  }

  render() {
    const {
      employers,
      projects,
    } = this.props;
    return (
      <Fragment>
        {employers.map((employer: EmployerType) => (
          <Employer
            key={sid.generate()}
            {...employer}
            projects={projects}
            ProjectComponent={ProjectCard}
          />
        ))}
      </Fragment>
    );
  }
}

export default Employers;
