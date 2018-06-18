// @flow
import { connect } from 'react-redux';
import Employers from '../../components/employers';
import { fetchEmployersIfNeeded } from './employers-actions';
import type { EmployerInfo } from '../../lib/types';
import utils from '../utils';

const mapDispatchToProps = dispatch => ({
  fetchEmployers: () => {
    dispatch(fetchEmployersIfNeeded());
  },
});

function mapStateToProps(state) {
  const { employers, projects }: {
    projects: {},
    employers: {
      data: Array<EmployerInfo>
    }
  } = state;
  const projectArray = Object.keys(projects).map((k: string) =>
    (projects[k].data ? projects[k].data.map(project =>
      Object.assign({}, project, {
        projectName: project.longName,
        employerWebsite: k,
      })) : []));
  return {
    projects: [].concat(...projectArray),
    employers: employers.data.map(employer => ({
      name: employer.description,
      website: utils.getLinkRelation(employer.links, 'website'),
    })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employers);
