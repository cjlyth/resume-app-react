// @flow
import { connect } from 'react-redux';
import Employers from '../../components/employers';
import { fetchEmployersIfNeeded } from './employers-actions';

const mapDispatchToProps = dispatch => ({
  fetchEmployers: () => {
    dispatch(fetchEmployersIfNeeded());
  },
});

function mapStateToProps(state) {
  const { employers } = state;
  return { employers: employers.data };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employers);
