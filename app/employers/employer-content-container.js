// @flow
import { connect } from 'react-redux';
import EmployerContent from './employer-content';
import { fetchEmployerData } from './actions';


const mapDispatchToProps = dispatch => ({
  fetchEmployer: (employerUri: string) => {
    dispatch(fetchEmployerData(employerUri));
  },
});

function mapStateToProps({ employerData }, { link }) {
  return employerData[link.href] || {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployerContent);
