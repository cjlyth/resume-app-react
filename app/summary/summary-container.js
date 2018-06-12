// @flow
import { connect } from 'react-redux';
import Summary from './summary';
import { fetchSummaryIfNeeded } from './actions';

const mapDispatchToProps = dispatch => ({
  fetchSummary: () => {
    dispatch(fetchSummaryIfNeeded());
  },
});

function mapStateToProps(state) {
  const { summary } = state;
  return { summary };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
