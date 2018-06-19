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
    const { employers, projects } = this.props;
    return (
      <Fragment>
        {employers.map((employer: EmployerType) => {
          const employerProjects: Array<ProjectType> = projects
            .filter(project => project.employerWebsite === employer.website);
          return employerProjects.length > 0
            ? (
              <Employer key={sid.generate()} {...employer}>
                {employerProjects.map(project => (
                  <ProjectCard key={sid.generate()} {...project}/>
                ))}
              </Employer>
              )
            : '';
        })}
      </Fragment>
    );
  }
}

export default Employers;
