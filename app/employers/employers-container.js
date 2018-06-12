// @flow
import { connect } from 'react-redux';
import Employers from './employers';
import { fetchEmployersIfNeeded } from './actions';

const mapDispatchToProps = dispatch => ({
  fetchEmployers: () => {
    dispatch(fetchEmployersIfNeeded());
  },
});

function mapStateToProps(state) {
  const { employers } = state;
  return { employers };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employers);
