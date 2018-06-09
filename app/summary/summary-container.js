import { connect } from 'react-redux';
import Summary from './summary';
import { decrementCount, incrementCount, resetCount, fetchSummaryData } from './actions';

const mapDispatchToProps = dispatch => ({
  fetchSummary: () => {
    dispatch(fetchSummaryData());
  },
});

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
